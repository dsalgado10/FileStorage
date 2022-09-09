function TicketItem({ document }) {
  return (
    <div className='ticket'>
      <div>{document.product}</div>
      <div>{new Date(document.createdAt).toLocaleString('en-US')}</div>
      <div>{document.file}</div>
    </div>
  )
}

export default TicketItem;
