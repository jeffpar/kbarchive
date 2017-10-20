---
layout: page
title: "Q194394: FTP Service Does Not Log All FTP Verbs"
permalink: /kb/194/Q194394/
---

## Q194394: FTP Service Does Not Log All FTP Verbs

{% raw %}

	Article: Q194394
	Product(s): Internet Information Server
	Version(s): WINNT:1.0,2.0,3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Internet Information Server (IIS) FTP service does not log the
	exact FTP verbs used, and in some cases, they are logged not at all.
	
	For example, the commands USER, PASS, and QUIT are logged correctly; however,
	"FTP STOR filename.ext" when uploading a file is logged as "created file
	filename.ext" instead of "STOR file filename.ext." Other commands such as DELE,
	MKD, RMD, RNTO are not listed.
	
	CAUSE
	=====
	
	Instead of logging all traditional FTP verbs, the FTP service logs present a
	minimal subset of FTP commands in a more readable text format.
	
	This behavior is by design.
	
	Additional query words: iis ftp
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400 kbiis300 kbiis200 kbiis100
	Version           : WINNT:1.0,2.0,3.0,4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
