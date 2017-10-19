---
layout: page
title: "Q143145: IIS FTP Annotation Files Display One Line"
permalink: /kb/143/Q143145/
---

## Q143145: IIS FTP Annotation Files Display One Line

	Article: Q143145
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use FTP annotations in Microsoft Internet Information Server, some FTP
	clients display only one line of the annotation file when you change to a new
	directory. The full annotation file is displayed when you use the DIR or LS
	commands.
	
	NOTE: This only works with the command line FTP on one line. If you are using
	Microsoft Internet Explorer for FTP, and using directory annotation, Internet
	Explorer will give you the following error message:
	
	  Internet explorer could not open site <address>
	
	Netscape browser will not give an error, but it does not work.
	
	This is a client/browser problem.
	
	CAUSE
	=====
	
	The server sends the annotation file one line at a time. Some FTP clients do not
	handle the multi-line message correctly. This is especially problematic when
	using a web browser to connect to the FTP server.
	
	WORKAROUND
	==========
	
	Reduce the annotation file to one line or disable FTP directory annotation. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q141705 : How to Set Up Directory Annotation for Internet Server FTP
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 1.0 We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodiis passive mode cannot find
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis100
	Version           : 1.0
	
	=============================================================================
	
