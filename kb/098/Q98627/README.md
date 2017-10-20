---
layout: page
title: "Q98627: SAMPLE: Advanced ALC_ Sample and ShowKeyboard() Sample"
permalink: /kb/098/Q98627/
---

## Q98627: SAMPLE: Advanced ALC_ Sample and ShowKeyboard() Sample

{% raw %}

	Article: Q98627
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Pen Computing, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Alckey.exe is a Windows for Pen Computing sample that demonstrates how to use
	the ALC values (defined in Windows for Pen Computing) to set how an hedit (or
	bedit) control filters its input.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Software
	Library:
	
	  Alckey.exe
	  (http://support.microsoft.com/download/support/mslfiles/Alckey.exe)
	
	For more information about downloading files from the Microsoft Software Library,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	ALC values can be set to define what values are recognized in a pen edit control
	(either hedit or bedit). For example, by setting ALC_NUMERIC, only numeric
	values are recognized in that particular control. Using ALC values allows
	developers greater freedom to customize how their application responds to ink.
	By defining a small subset of only the types of values wanted in an edit
	control, recognition of those values increases.
	
	The AlcKey sample has two edit controls, hedit and bedit. By selecting the ALC
	flags desired via the ALC dialog box, the hedit control is set to those values.
	The bedit control is not altered, allowing the developer to view the difference
	between the settings of the two controls.
	
	The AlcKey sample also demonstrates the use of the ShowKeyboard() application
	programming interface (API), including the recommended way of interfacing to the
	virtual keyboard via a "keyboard" button; which is OwnerDraw. Note that the
	virtual keyboard always stays on top, but never has the focus. The output of the
	keyboard is directed to the last control that had the focus. Note also that the
	virtual keyboard in Windows for Pen Computing version 1.0 is not affected by the
	filtering effects of the ALC values. Only recognized ink is affected; the
	keyboard does not involve inking, so it bypasses this step.
	
	Additional query words: 0 softlib ALCKEY.EXE
	
	======================================================================
	Keywords          :  
	Technology        : kbWinPenSearch kbZNotKeyword3 kbWinPen100
	Version           : :1.0
	
	=============================================================================
	

{% endraw %}
