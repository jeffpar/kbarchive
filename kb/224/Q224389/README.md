---
layout: page
title: "Q224389: HTTP Error 403, 403.4, 403.5 Forbidden: SSL Required"
permalink: kb/224/Q224389/
---

## Q224389: HTTP Error 403, 403.4, 403.5 Forbidden: SSL Required

	Article: Q224389
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you enable the Require Secure Channel when accessing this resource option
	or the Require 128-bit Encryption option from the IIS HTML Admin (HTMLA), the
	following error occurs when trying to access the Web site:
	
	  HTTP Error 403
	  403.4 Forbidden: SSL required
	  This error indicates that the page you are trying to access is secured with
	  Secure Sockets Layer (SSL). In order to view it, you need to enable SSL by
	  typing "https://" at the beginning of the address you are attempting to
	  reach.
	  Please contact the Web server's administrator if the problem persists.
	
	CAUSE
	=====
	
	The HTML Admin (HTMLA) incorrectly allows you to enable Require Secure Channel
	when accessing this resource and Require 128-bit Encryption before an SSL
	certificate has been mapped to the Web site. The MMC does not allow you to
	enable either of these options until an SSL certificate has been assigned to the
	Web site using Key Manager.
	
	RESOLUTION
	==========
	
	To resolve this problem, assign an SSL certificate to the Web site using the
	MMC.
	
	WORKAROUND
	==========
	
	If you do not have an SSL certificate to assign to the Web site, use the Cscript
	utility to disable these options.
	
	1. Open a CMD prompt: Click Start, click Run, and then type "cmd.exe" (without
	  quotation marks) and press the Enter key.
	
	2. Change to the Adminsamples directory by typing "CD
	  \winnt\system32\inetsrv\adminsamples" (without the quotation marks), and then
	  press the Enter key. Note: Capitalization does not matter.
	
	3. Type "cscript adsutil.vbs set w3svc/1/root/AccessSSL false" (without
	  quotation marks), and then press the Enter key. Again, capitalization does
	  not matter.
	
	4. Type "cscript adsutil.vbs set w3svc/1/root/AccessSSL128 false" (without
	  quotation marks), and then press the Enter key. Capitalization does not
	  matter.
	
	5. Close the CMD window.
	
	6. Close all browsers.
	
	7. You should now be able to access the Web site
	
	If you are still unable to access the Web site without receiving the "HTTP Error
	403" error, then it is possible that SSL is enabled at a higher level in the
	metabase hierarchy. Repeat steps 1 through 7, but execute the following Cscript
	commands instead:
	
	  cscript adsutil.vbs set w3svc/1/AccessSSL false
	  cscript adsutil.vbs set w3svc/1/AccessSSL128 false
	  cscript adsutil.vbs set w3svc/AccessSSL false
	  cscript adsutil.vbs set w3svc/AccessSSL128 false
	
	If you are still unable to access the Web site without receiving the "HTTP Error
	403" error, it is possible that SSL is enabled on a different Web site instance
	other than the first instance. Repeat steps 1 through 7, but execute the Cscript
	command with the appropriate Web site instance number. For example, if SSL is
	enabled on the third Web site instance, the following Cscript commands will
	disable SSL:
	
	  cscript adsutil.vbs set w3svc/3/AccessSSL false
	  cscript adsutil.vbs set w3svc/3/AccessSSL128 false
	
	If the above steps do not disable SSL, then please contact Microsoft Technical
	Support for assistance.
	
	MORE INFORMATION
	================
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
