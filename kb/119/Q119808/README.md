---
layout: page
title: "Q119808: Transverse &amp; Extra Paper Sizes Not Available in Common Dialogs"
permalink: /kb/119/Q119808/
---

## Q119808: Transverse &amp; Extra Paper Sizes Not Available in Common Dialogs

{% raw %}

	Article: Q119808
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a PostScript printer that supports transverse and extra paper
	sizes (such as the Agfa 9000 series PS), applications that use common dialog
	boxes (such as the applications that ship within Windows and Windows for
	Workgroups) do not list all the paper sizes supported by the printer. When you
	choose Print Setup from the File menu of one of these applications, these paper
	sizes do not appear; however, if you choose the Printers icon in Control Panel
	and choose the Setup button, they do appear.
	
	In Write, for example, the following paper sizes do not appear in the Print Setup
	dialog box:
	
	  Letter Transverse 11 x 8.5 in
	  A4 Transverse 297 x 210 mm
	  A5 Transverse 148 x 210 mm
	  B5 Transverse 182 x 257 mm
	  Letter Extra 9.5 x 12 in
	  A4 Extra 236 x 322 mm
	  Legal Extra 9.5 x 15 in
	  Tabloid Extra 11.69 x 18 in
	  Letter Extra Transverse 12 x 9.5 in
	
	CAUSE
	=====
	
	These paper sizes are not displayed because of a problem with the Print Setup
	common dialog box supplied with Windows 3.1 (and later versions) and the
	PostScript printer driver PSCRIPT.DRV.
	
	WORKAROUND
	==========
	
	To work around this problem, open Control Panel, choose the Printers icon, make
	the desired printer the default, press the Setup button, and specify the desired
	paper size in the Paper Size list. This allows the application to print the
	desired paper size.
	
	NOTES:
	
	- The Paper Size line of the Print Setup dialog box of the application is blank
	  because the Print Setup common dialog box does not list transverse and extra
	  paper sizes.
	
	- Note that changing the Paper Size in the Print Setup dialog box of an
	  application overrides the settings in the Setup dialog box of Control Panel.
	
	Additional query words: 3.10 3.1 3.11 dialogs
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
