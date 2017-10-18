---
layout: page
title: "Q143146: Error Msg: &quot;This FTP Server Does Not Support Passive Mode&quot;"
permalink: kb/143/Q143146/
---

## Q143146: Error Msg: &quot;This FTP Server Does Not Support Passive Mode&quot;

	Article: Q143146
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
	
	When you connect to an Internet Information Server FTP server using Internet
	Explorer version 1.5, the following error message appears:
	
	  This FTP server does not support passive mode.
	  The attempt to load 'ftp://<ftpservername>' failed.
	
	Other Web browsers may also fail. Some of the other browsers' error messages are
	listed below:
	
	  Netscape: Netscape is unable to find the file /
	
	  Internet Explorer 2.0 for Windows 95: Unable to open ftp://ftpservername
	
	CAUSE
	=====
	
	Directory annotation is enabled on the FTP server and the annotation file
	contains more than 1 line of text.
	
	WORKAROUND
	==========
	
	Reduce the annotation text file to one line of text or disable directory
	annotations. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q141705 : How to Set Up Directory Annotation for Internet Server FTP
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 1.0 and Microsoft Internet Explorer 1.0. We are researching this problem
	and will post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words: prodiis
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbiisSearch kbiis100
	Version           : 1.0
	
	=============================================================================
	
