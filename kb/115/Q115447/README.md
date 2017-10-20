---
layout: page
title: "Q115447: X400: Corrupt .XTN File for Network Postoffice Stops Install"
permalink: /kb/115/Q115447/
---

## Q115447: X400: Corrupt .XTN File for Network Postoffice Stops Install

{% raw %}

	Article: Q115447
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you enter the network name of a postoffice when you are installing the access
	component of the X.400 gateway, a corrupt .XTN file for that network (for
	example: invalid length) causes the install program to exit, and returns you to
	an MS-DOS prompt.
	
	CAUSE
	=====
	
	Because the .XTN file contains the postoffice definitions for an external
	network, a corrupt one has system consequences so severe that Install simply
	exits. The gateway does not report the exact condition leading to the Install
	failure.
	
	
	RESOLUTION
	==========
	
	Contact Microsoft Product Support Services.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	

{% endraw %}
