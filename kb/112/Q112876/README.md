---
layout: page
title: "Q112876: Mac OOF: Err Msg: ...Application...Has Unexpectedly Quit"
permalink: /kb/112/Q112876/
---

## Q112876: Mac OOF: Err Msg: ...Application...Has Unexpectedly Quit

	Article: Q112876
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1d
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1d 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	PROBLEMS
	--------
	
	When you choose the Select Message Types drop-down list box from the Ignore
	Message Type section in the Configuration dialog box of Out of Office Server,
	the following error message may appear:
	
	  The application "unknown" has unexpectedly quit.
	
	CAUSE
	=====
	
	If there are more than 255 characters to display in the drop-down list box, this
	error message appears. This may be caused by a large number of custom forms
	installed on the Mail server.
	
	WORKAROUND
	==========
	
	To work around this problem, you can perform one of the following procedures:
	
	- Remove some of the custom forms installed on the Mail server. After you
	  choose the ignored message types, you can reinstall the custom forms.
	
	- Use Electronic Forms Designer to shorten the names of the custom forms and
	  then update them on the server. Again, after you choose the ignored message
	  types, you can reset the full descriptions on the forms.
	
	Additional query words: 3.10d
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310d
	Version           : WINDOWS:3.1d
	
	=============================================================================
	
