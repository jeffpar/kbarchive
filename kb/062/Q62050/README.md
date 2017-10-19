---
layout: page
title: "Q62050: Mac Hyp: Get the Name of an Enclosed File"
permalink: /kb/062/Q62050/
---

## Q62050: Mac Hyp: Get the Name of an Enclosed File

	Article: Q62050
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
	
	The following syntax returns the name of the enclosure contained within the
	specified message:
	
	     msmail(getEnclosureName, messageRef[,index])=>fileName
	
	If the specified message does not contain an enclosure, an error will be
	returned.
	
	"messageRef" is a reference to a selected message obtained by making a call to
	the msmail function using a parameter that returns a message reference.
	
	The optional "index" parameter allows multiple enclosures to be extracted from a
	message. Since this feature was not implemented in Microsoft Mail version 2.00,
	passing anything other than 0 (zero) in Mail 2.00 returns an error (0 is the
	default).
	
	Note: This default was changed in Mail version 3.00 to allow multiple enclosures.
	With Mail 3.0, any number 1 to n is allowed. 1 is the default with Mail 3.00. If
	a script used the optional index with Mail 2.00 and is updated to Mail 3.00, a
	"Bad enclosure index" mailresulttext will be returned. The mailresult error is
	-2593.
	
	In all cases, the name that the file was successfully saved with is returned.
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	
