---
layout: page
title: "Q175205: Printout Truncated When Printing to Plotter"
permalink: /kb/175/Q175205/
---

## Q175205: Printout Truncated When Printing to Plotter

{% raw %}

	Article: Q175205
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.00
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When printing to a plotter printer under from a computer running Windows NT 4.0,
	the printout might shift down and to the left, and might truncate text or
	graphics at the bottom and on the right side of the page. All text and graphics
	might print as expected on a computer running Windows NT 3.51.
	
	-or-
	
	If a user attempts to format a document with no (zero) margins on a computer
	running Windows NT 3.51, applications such as Write allow the settings and will
	not return any error message. On computers running Windows NT 4.0, the following
	(or a similar) message is returned when no (zero) margin is requested:
	
	  
	
	  Current printer cannot print outside these margins:
	  Left: 0.71 Right: 0.7
	  Top: 0.24 Bottom: 0.24
	
	CAUSE
	=====
	
	When you set document margins to all zeros in an application, a check is made to
	determine minimum margins for the selected print device. A routine contained
	within plotter.dll checks the manufacturer- supplied "plotter characterization
	data" (PCD) file. This file supplies the hardware minimum margin values for the
	print device. Minimum margin values are not always correctly enforced because of
	an error in Windows NT 3.51.
	
	Minimum margin values are correctly enforced in Windows NT 4.0. A request for a
	zero margin setting (or a value less than the PCD margin minimum) returns an
	error message that shows the minimum values. In some cases in Windows NT 4.0,
	printer manufacturers increased minimum margins to guarantee that print data is
	contained within the device printable areas.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	This behavior is by design in Windows NT 4.0.
	
	RESOLUTION
	==========
	
	To resolve this problem, in Windows NT 4.0, create a custom form that is
	slightly larger than the actual page size you are using. For example, if the
	area to be printed on the plotter paper is 8.5" x 11", and the unprintable
	region is .24" on the top and bottom, and .7" on the left and the right, create
	a form with dimensions of at least 9.9" x 11.48".
	
	For more information on how to create custom forms, please see the following
	Microsoft Knowledge Base article:
	
	ARTICLE-ID: Q157172
	TITLE : How to Create Custom Forms in Windows NT 4.0
	
	Additional query words: sheet-fed media sheet-feed hp DesignJet 600c 650c printable area margin
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.00
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
