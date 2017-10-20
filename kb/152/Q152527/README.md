---
layout: page
title: "Q152527: Err Msg: Keycheck Failed 0x8009030e"
permalink: /kb/152/Q152527/
---

## Q152527: Err Msg: Keycheck Failed 0x8009030e

{% raw %}

	Article: Q152527
	Product(s): Internet Information Server
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install an SSL certificate on an IIS server using Setkey.exe, you may
	get the following error message:
	
	  Error: keycheck failed 0x8009030e
	
	CAUSE
	=====
	
	There are two possible causes for this error:
	
	- The Keypair file or the certificate file used with setkey is not valid or is
	  corrupt.
	
	- The certificate file (the text message sent to you by the Certificate
	  Authority containing the SSL certificate) was saved in Unicode format.
	
	RESOLUTION
	==========
	
	Make sure the certificate was not saved in Unicode format. Open the certificate
	using Notepad.exe and select Save As. Make sure that Save File as Type is set to
	Text Files (*.txt) not Unicode Files.
	
	If the file was saved in Unicode format, click Save As on the File menu and
	re-save it as text.
	
	If the above resolution does not fix the problem, the certificate may need to be
	re-generated and resubmitted to the Certificate Authority.
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbiisSearch kbiis100
	Version           : 1.0
	
	=============================================================================
	

{% endraw %}
