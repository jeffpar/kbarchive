---
layout: page
title: "Q58287: AutoCAD Plotter Communication Under Windows 3.0"
permalink: /kb/058/Q58287/
---

## Q58287: AutoCAD Plotter Communication Under Windows 3.0

{% raw %}

	Article: Q58287
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	If you use Autodesk's AutoCAD application with a plotter, AutoCAD queries
	the plotter interactively for document size and other parameters.
	
	When you run AutoCAD under Microsoft Windows 3.0, the return values from
	the plotter are incorrect. AutoCAD generates an error message similar to
	the following:
	
	  Invalid hard clip limits returned from plotter;
	  -211801,21181,16601
	
	AutoCAD polls the communications port to read the data sent by the plotter.
	Because the data read is not interrupt driven, you may lose data if other
	virtual machines are allowed to be scheduled while this application is
	trying to poll data from the communications port.
	
	The only workaround at this time is to run AutoCAD VM-exclusive.
	
	The product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or other wise, regarding this
	product's performance or reliability.
	
	Additional query words: 3.0 3.0a 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
