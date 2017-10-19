---
layout: page
title: "Q62125: Mac Hyp: Microsoft Mail and SuperCard"
permalink: /kb/062/Q62125/
---

## Q62125: Mac Hyp: Microsoft Mail and SuperCard

	Article: Q62125
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
	
	The Microsoft Mail interface can be used with SuperCard versions 1.0 through 1.5
	from Silicon Beach Software. To do this, use the Convert Stack command described
	in the SuperCard manual, and pick the default button Normal in the Resource
	Preferences dialog box.
	
	The interface consists of an XFCN named "msmail" and a number of STR# resources.
	Because SuperCard doesn't import STR# resources, the normal conversion process
	automatically adds these strings to SuperCard's SharedFile.
	
	When you create a stand-alone application from SuperEdit, these resources are not
	automatically copied in; this is explained in SuperCard Technical Note #1 (which
	comes with SuperCard). To make Microsoft Mail work, you must manually copy three
	STR# resources from this stack to your stand-alone application using ResEdit.
	These resources are called "msmail", "msmailStrings", and "msmailErrors". You
	can give the resources any ID, but you must not change the names.
	
	Note: The "msmailErrors" resource is used to set the HyperCard global
	mailResultText. If you do not need error strings, you can remove this resource
	to save space.
	
	This information is taken from the appendix of the "Microsoft Mail HyperCard
	Interface Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	
