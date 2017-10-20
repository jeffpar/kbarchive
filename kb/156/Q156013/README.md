---
layout: page
title: "Q156013: INFO: Possible Uses for Offline Views in Visual FoxPro"
permalink: /kb/156/Q156013/
---

## Q156013: INFO: Possible Uses for Offline Views in Visual FoxPro

{% raw %}

	Article: Q156013
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbDesigner kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Offline views in Visual FoxPro allow you to work with a selected amount of data
	while it is disconnected from the server. Then you can reconnect to the server
	and update the data.
	
	MORE INFORMATION
	================
	
	With offline views, you can work with data offline, meaning the data is no
	longer connected to the server. This allows you to take your work on the road or
	to save a connection to the server by working with the data locally.
	
	You can also take your data to another site with offline views. Once you have
	created an offline view (using the CREATEOFFLINE function), you can copy the
	necessary files to a disk or to a laptop and be on your way.
	
	If you do not want to tie up a connection to the server, you can create an
	offline view and do the work locally, somewhat simulating a peer-to-peer
	network. Once you have finished the work, you can use the offline view's ONLINE
	clause and update the data on the server.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q155528 HOWTO: Set Up an Offline View in Visual FoxPro 5.0
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDesigner kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
