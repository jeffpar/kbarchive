---
layout: page
title: "Q59972: Mac Hyp: Getting a Macintosh Resource from a Message"
permalink: /kb/059/Q59972/
---

## Q59972: Mac Hyp: Getting a Macintosh Resource from a Message

	Article: Q59972
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (SDK) for HyperCard, versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	getMacResource retrieves the Macintosh resource with the given type, name, and
	ID and returns it in a handle. The syntax for getMacResource is as follows:
	
	     msmail(getMacResource, type, name, ID)=>handle
	
	Either the name or ID parameters may be empty, but not both. Here are some
	examples of legitimate parameters:
	
	     put msmail(getMacResource, "snd ","","Simple Beep") into hndl
	     put msmail(getMacResource, "PICT", 4007) into hndl
	
	getMacResource looks first in the resource fork of the current stack, then in
	HyperCard's resources, and finally in the System resources. The name and ID of a
	resource can be found with the ResEdit program from Apple. Note that if the ID
	is empty, a placeholder ("") must be used.
	
	When you are done using the handle, you should dispose of its contents with
	disposeHandle.
	
	The "type" parameter lets users specify the 4-character type of the resource to
	be added, such as "ICON", "CODE", or "snd ".
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	
