---
layout: page
title: "Q62052: Mac Hyp: Getting the Name of Currently Logged On User"
permalink: /kb/062/Q62052/
---

## Q62052: Mac Hyp: Getting the Name of Currently Logged On User

{% raw %}

	Article: Q62052
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
	
	The following syntax returns the name of the user who is currently signed on to
	Microsoft Mail. If the workstation desk accessory (DA) is logged in to a
	different account than the application (stack), then the user name returned will
	be the one the stack is logged in as.
	
	     msmail(getUserName [,extended]) => data
	
	If "extended" is true (the default), the name is returned in the form
	"userName@serverName."
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	

{% endraw %}
