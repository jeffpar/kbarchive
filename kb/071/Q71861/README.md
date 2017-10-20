---
layout: page
title: "Q71861: Printing Problems with Delrina PerForm Pro for Windows"
permalink: /kb/071/Q71861/
---

## Q71861: Printing Problems with Delrina PerForm Pro for Windows

{% raw %}

	Article: Q71861
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the following two known printing problems with Delrina
	Technology's PerForm Pro and Hewlett-Packard (HP) LaserJet printers:
	
	- Paper Source Cannot be Changed to Manual
	
	- PerForm Error Message when Printing: "EC Feed Monarc"
	
	MORE INFORMATION
	================
	
	PerForm Pro for Windows is a form-processing software product that allows you to
	design, fill in, print, and manage business forms.
	
	Cannot Change Paper Source to Manual
	------------------------------------
	
	When you print to any HP LaserJet printer from PerForm Pro by Delrina Technology,
	the paper source cannot be changed to manual or envelope feed from within
	PerForm Pro. Choosing manual or envelope feed from within PerForm Pro resets the
	paper source to auto select or upper tray, depending on the kind of HP LaserJet
	printer.
	
	To change the paper source for an HP LaserJet printer driver:
	
	1. Run Control Panel and choose the Printers icon.
	
	2. Choose the Configure button.
	
	3. Choose the Setup button.
	
	4. Enter the desired setup information.
	
	Do not use the File Select or File Print Setup options in PerForm Pro.
	
	Delrina is researching this problem. For more information, contact Delrina
	Technology.
	
	PerForm Error Message "EC Feed Monarc"
	--------------------------------------
	
	When you print from Delrina Technology's PerForm Pro to any HP PCL5 printer using
	legal-sized paper, the printer may display the following error message because
	PerForm Pro does not correctly handle legal-sized paper:
	
	  EC Feed Monarc
	
	To work around this problem, press the Continue button on the control panel of
	the printer. Pressing the Continue button will allow the print job to continue
	without any adverse effects.
	
	The printer drivers that are affected by this problem are versions 3.7 and 3.77
	of the HPPCL5A.DRV driver.
	
	Delrina is researching this problem. For more information, contact Delrina
	Technology.
	
	PerForm Pro for Windows is manufactured by Delrina Technology, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	REFERENCES
	==========
	
	HP PCL5 Printer Languages Solutions for Microsoft Windows 3.0 Release Notes,
	4/17/91
	
	
	Additional query words: 3rdparty win30 3.00 3.00a hp lj
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
