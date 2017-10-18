---
layout: page
title: "Q241004: Network Programming for MS Windows Comments and Corrections"
permalink: kb/241/Q241004/
---

## Q241004: Network Programming for MS Windows Comments and Corrections

	Article: Q241004
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 07-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Network Programming for Microsoft Windows ISBN 0-7356-0560-2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Network Programming for Microsoft Windows,
	ISBN 0-7356-0560-2.
	
	The following topics are covered:
	
	- Page 130: Error In Chart 5-4
	
	- Page 231: Code Correction
	
	- Page 283: SO_SNDBUF Table Corrections
	
	- Page 320: Changes In SIO_ROUTING_INTERFACE_QUERY Table
	
	- Page 387: Text Error
	
	MORE INFORMATION
	================
	
	Page 130: Error In Chart 5-4
	----------------------------
	
	The first line in the chart on page 130 contains an error.
	
	Change:
	Internet Protocol (IP) AF_INET TCP SOCK_STREAM IPPROTO_IP
	
	To:
	Internet Protocol (IP) AF_INET TCP SOCK_STREAM IPPROTO_TCP
	
	
	Page 231: Code Correction
	-------------------------
	
	On page 231, in the 5th line of code change:
	
	  nRet  = ioctlsocket(s, FIOBIO, (unsigned long *) &ul);
	
	To:
	
	  nRet  = ioctlsocket(s, FIONBIO, (unsigned long *) &ul);
	
	
	Page 283: SO_SNDBUF Table Corrections
	-------------------------------------
	
	On page 283, in the "SO_SNDBUF" table, in the Description column:
	
	Change:
	"TRUE (nonzero) means socket is configured for sending broadcast messages"
	
	To:
	"Gets or sets the per-socket buffer size for send operations"
	
	Also, in the optval Type column:
	
	Change:
	"BOOL"
	
	To:
	"int"
	
	
	Page 320: Changes In SIO_ROUTING_INTERFACE_QUERY Table
	------------------------------------------------------
	
	On page 320, in the SIO_ROUTING_INTERFACE_QUERY table, the "Output" and
	"Description" sections need revision.
	
	Change the Output from:
	"None"
	
	To:
	"SOCKADDR"
	
	Change the Description from:
	"Determines whether OOB data has been read"
	
	To:
	"Obtains the address of the local interface that should be used to send to the
	specified address."
	
	
	Page 387: Text Error
	--------------------
	
	Page 387, paragraph 4, sentence 1:
	Change: "...exists for use with the WSAloctl or ioctlsocket function that
	performs..."
	To: "...exists for use with the WSAloctl function that performs..."
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: DEVBOOK 0-7356-0560-2
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Issue type        : kbinfo
	
	=============================================================================
	
