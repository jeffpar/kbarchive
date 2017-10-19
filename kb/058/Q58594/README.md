---
layout: page
title: "Q58594: Mac Hyp: AddMacResource Adds Resources to Current Stack"
permalink: /kb/058/Q58594/
---

## Q58594: Mac Hyp: AddMacResource Adds Resources to Current Stack

	Article: Q58594
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (SDK) for HyperCard, versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	AddMacResource adds the data pointed to by a handle to the resource fork of the
	current stack. The following is an example:
	
	  msmail(addMacResource, handle, type [,name] [,ID])
	
	The resource is stored with the given resource type, ID, and resource name.
	
	If no "ID" is specified, a unique ID is chosen for the resource. If no "name" is
	specified, it remains blank. Any resources in the current stack with the same
	type and ID or type and name are removed.
	
	"handle" is a Macintosh handle to a resource. This value is returned by a call to
	getMacResource.
	
	The "type" parameter lets advanced users specify the type of the field to be
	added. This must be passed only if you are creating nontext fields that do not
	occur on the send screen for this message type. In all other cases, the type
	will be filled in automatically.
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	
