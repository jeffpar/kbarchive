---
layout: page
title: "Q133085: EPS Picture Appears Transparent on PCL Printers"
permalink: /kb/133/Q133085/
---

## Q133085: EPS Picture Appears Transparent on PCL Printers

{% raw %}

	Article: Q133085
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbgraphic kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print an Encapsulated PostScript (EPS) graphic from PowerPoint 7.0 for
	Windows 95 to a black-and-white PCL printer, parts or all of the EPS graphic may
	appear to be transparent.
	
	A PCL printer is a printer that uses the Hewlett-Packard Printer Control
	Language. PCL printers include all HP LaserJet printers and LaserJet- compatible
	printers.
	
	CAUSE
	=====
	
	This is a bug in PCL banding printer drivers. The drivers do not preserve the
	z-order, or "layering" of the objects in the EPS file, which in turn causes them
	to appear as transparent.
	
	NOTE: EPS graphics are designed to print well to printers that use the PostScript
	page description language and not to printers that use other printer languages.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in PowerPoint version 7.0 for
	Windows 95. We are researching this problem and will post new information here
	as it becomes available.
	
	WORKAROUND
	==========
	
	Convert the EPS graphic to another one of the supported graphic file formats
	that PowerPoint is able to use, and then import the new version of the graphic
	to your presentation. Many commercially available graphics and drawing software
	packages can convert EPS graphics to other file formats.
	
	Additional query words: 7.00 ppt95 WIN95 LaserJet II Plus III IIIsi IIIp 4 4m 4mplus 4mvplus 5m 4si
	
	======================================================================
	Keywords          : kbgraphic kbprint kbPrinting 
	Technology        : kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbPowerPt95Search
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
