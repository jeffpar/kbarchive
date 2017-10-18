---
layout: page
title: "Q75958: Mac Hyp: Adding Multiple Enclosures to a Message"
permalink: kb/075/Q75958/
---

## Q75958: Mac Hyp: Adding Multiple Enclosures to a Message

	Article: Q75958
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (SDK) for HyperCard, versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The AddEnclosure command in the Microsoft Mail version 3.0 HyperCard Software
	Development Kit (SDK) does not use Mail's File dialog box. It uses the standard
	Macintosh File dialog box, which adds only one file to the message at a time.
	
	To add multiple enclosures, this command must be called multiple times.
	
	MORE INFORMATION
	================
	
	The following script allows an unknown number of files to be added to a
	message:
	
	    on mouseup
	        put msmail (CreateMessage) into messageRef
	        put 0 into count
	        repeat
	          put msmail (AddEnclosure, messageRef)
	          if msmail (GetEnclosureInfo, messageRef, "enclCount") = count
	     then exit repeat
	          add 1 to count
	        end repeat
	
	This script brings up the standard Macintosh File dialog box until the Cancel
	button is clicked.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard300
	Version           : :3.0,3.0a
	
	=============================================================================
	
