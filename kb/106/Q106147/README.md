---
layout: page
title: "Q106147: DosPeekNmPipe Returns Incorrect bRead Value"
permalink: kb/106/Q106147/
---

## Q106147: DosPeekNmPipe Returns Incorrect bRead Value

	Article: Q106147
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	DosPeekNmPipe returns an incorrect value for bRead (bytes read) when peeking
	continuously on an empty pipe.
	
	CAUSE
	=====
	
	The DosPeekNmPipe API lets you examine the contents of a named pipe without
	taking anything out of it.
	
	  unsigned far pascal
	  DosPeekNmPipe(
	
	       unsigned handle,     /* pipe handle          */ 
	       char far * buffer,     /* buffer for data     */ 
	       USHORT buflen,          /* length of buffer     */ 
	       USHORT far * bread     /* bytes read          */ 
	       USHORT far * bavail,     /* bytes available     */ 
	       USHORT far * status      /* pipe status          */ 
	       )
	
	If successful, DosPeekNmPipe copies as much data as will fit into the buf buffer.
	The bRead parameter returns the number of bytes written into buf. The bAvail and
	status parameters return additional information not available with DosRead.
	
	A named pipe application often makes a decision based on parameter values (bRead,
	bAvail, status and buf) returned by the DosPeekNmPipe API. For example, an
	application may try to read message/bytes in the pipe if bRead > 0, so an
	incorrectly returned bRead value might result in execution of the wrong code
	path.
	
	When a DosPeekNmPipe is called, DOS redir bundles this request in a transact
	server message block (SMB) and sends it to the server. Applications call
	DosPeekNmPipe to check the status of the pipe, often in a loop until pipe status
	changes. To reduce network traffic, the redir does not send a transact SMB on
	the wire each time an application calls DosPeekNmPipe: if DosPeekNmPipe returns
	0 bytes read, the next DosPeekNmPipe transact SMB is not sent on the wire for 9
	timer ticks, and incremental delays are introduced before sending a packet. If
	an application issues a DosPeekNmPipe call before the redir can send a packet,
	DOS redir should initialize bRead and bAvail to 0, but in this instance it
	initializes bAvail to 0 and bRead to something other than 0. DosPeekNmPipe
	returns a meaningless bRead value, and the DOS redir does not send
	DosPeekNmPipe/transact SMB on the wire.
	
	STATUS
	======
	
	Resolved by hotfix CSD00.046.
	
	
	Additional query words: 2.20 2.2 dos DosPeekNmPipe DosRead
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
