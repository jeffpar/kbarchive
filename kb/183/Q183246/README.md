---
layout: page
title: "Q183246: INFO: Printing Features Not Available in VBCE"
permalink: /kb/183/Q183246/
---

## Q183246: INFO: Printing Features Not Available in VBCE

{% raw %}

	Article: Q183246
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp500 kbVBp600 kbOSWinCE100 kbGrpDSVB
	Last Modified: 16-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Although Windows CE does support printing, this functionality was not
	incorporated into the Windows CE Toolkit for Visual Basic 6.0 (VBCE) or eMbedded
	Visual Basic 3.0.
	
	MORE INFORMATION
	================
	
	The Printers collection, Printer object, and PrintForm method are not available
	in VBCE or eVB.
	
	There are several alternative methods that you can use:
	
	- <B7> Print via an ActiveX component made in either the Windows CE Toolkit for
	  Visual C++ (VCCE) or with eMbedded Visual C++. This control must be made by
	  the developer or purchased from a third-party vendor.
	
	- Create a file to be printed, synchronize the file to the desktop computer,
	  and print the file from the desktop.
	
	- Send text to the printer via the serial/IR port. If necessary, include
	  appropriate printer commands (escape codes).
	
	- Create a text file. Open and print the text file in Pocket Word.
	
	NOTE: The VBCE Common Dialog Box control released with the Microsoft Windows CE
	ActiveX Control Pack does not support functions related to printing.
	
	REFERENCES
	==========
	
	Windows CE Toolkit Help for Visual Basic 6.0
	
	Online Help for eMbedded Visual Basic
	
	Additional query words: VBCE wce evb vbce6
	
	======================================================================
	Keywords          : kbToolkit kbVBp500 kbVBp600 kbOSWinCE100 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
