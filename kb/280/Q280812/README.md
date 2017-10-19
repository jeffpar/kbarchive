---
layout: page
title: "Q280812: DOC: AppOopRecoverLimit Range Wrong in IISHelp"
permalink: /kb/280/Q280812/
---

## Q280812: DOC: AppOopRecoverLimit Range Wrong in IISHelp

	Article: Q280812
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbdocerr kbWinDNA kbGrpDSSIE kbDSupport kbIIS kbiis400 kbiis500
	Last Modified: 06-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	According to IISHelp (http://localhost/iishelp):
	
	  The AppOopRecoverLimit metabase property specifies the maximum number of
	  times an out-of-process application will be restarted after a failure. The
	  server will not service requests from components that have exceeded this
	  limit.
	
	This article describes an error in IISHelp concerning the range of acceptable
	values for AppOopRecoverLimit.
	
	NOTE: This property does not apply to in-process applications or extensions.
	
	MORE INFORMATION
	================
	
	According to IISHelp, the range for AppOopRecoverLimit is 1 to 5. But in fact
	the actual range is 1 to 0xffffffff.
	
	You can use Adsutil.vbs to set the range for AppOopRecoverLimit at the site level
	or the virtual directory level. The following example demonstrates how to use
	ADSUtil.vbs to set the AppOopRecoverLimit value to "10":
	
	  cscript.exe C:\Inetpub\AdminScripts\adsutil.vbs set w3svc/1/AppOopRecoverLimit "10"
	
	  cscript.exe C:\Inetpub\AdminScripts\adsutil.vbs set w3svc/1/root/virtualdirectory/AppOopRecoverLimit "10"
	
	AppOopRecoverLimit has the metabase identifier MD_APP_OOP_RECOVER_LIMIT.
	
	For more information, see IISHelp (http://localhost/iishelp).
	
	For more information on using ADUtil.vbs and the IIS metabase, see the
	"References" section of this article.
	
	NOTE: Although you may want to increase AppOopRecoverLimit while troubleshooting,
	when the problem has been resolved it is in your best interest to return this to
	the default value of "5".
	
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q240941 An Introduction to the IIS Metabase
	
	Additional query words: appooprecoverylimit recover limit
	
	======================================================================
	Keywords          : kbdocerr kbWinDNA kbGrpDSSIE kbDSupport kbIIS kbiis400 kbiis500 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbbug
	
	=============================================================================
	
