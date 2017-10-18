---
layout: page
title: "Q246493: XWEB: How to Remove the Change Password Button in OWA"
permalink: kb/246/Q246493/
---

## Q246493: XWEB: How to Remove the Change Password Button in OWA

	Article: Q246493
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use Outlook Web Access (OWA), you may choose to remove the Change
	Password button under Options in the OWA client.
	
	MORE INFORMATION
	================
	
	Removing the Change Password button requires you to edit the Set.Asp file
	located in the Exchsrvr\Webdata\Usa\Options folder on the OWA server. To do so:
	
	1. Locate the Set.Asp file, and open it in Notepad.
	
	2. Remove the following section from the file, and save the new Set.Asp file
	
	  if fEnablePasswordMenu then
	     ' Get the Server name.  This is required for calling the password
	     ' change form using https.
	   
	     thisServersName = Request.ServerVariables("SERVER_NAME")
	   
	     ' Get the IIS Version Number.  Password changing is only supported
	     ' in version 4 or greater.
	   
	       soft =  Request.ServerVariables("SERVER_SOFTWARE")
	       posver = Instr(soft, "/")
	       serverVersion = CInt(right(soft, len(soft)-posver))
	  end if
	
	3. Start the browser on the OWA server. The Change Password button no longer
	  appears.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550SP1 kbOWA550SP2 kbOWA550SP3
	Version           : WINDOWS:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
