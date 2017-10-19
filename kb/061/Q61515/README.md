---
layout: page
title: "Q61515: Mac Hyp: &quot;Can't Understand msmail&quot; -- Statement Needs a Verb"
permalink: /kb/061/Q61515/
---

## Q61515: Mac Hyp: &quot;Can't Understand msmail&quot; -- Statement Needs a Verb

	Article: Q61515
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
	
	When a script is run, if HyperCard gives the error message "Can't understand
	msmail," this means that the function needs a verb in front of it, as follows:
	
	  put msmail(....
	  get msmail(...
	  add msmail(....
	
	A line can't begin with
	
	  msmail(....
	
	MORE INFORMATION
	================
	
	The function msmail takes its arguments and returns a mailresult or data
	variable. It is not a HyperTalk action verb. Note: If "put" is used preceding
	the function, use the following form:
	
	  put msmail(...) into <container>
	
	If "into <container>" is left off, the result or data will be put into the
	message box and the message box will appear.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	
