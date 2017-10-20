---
layout: page
title: "Q156236: PRB: Paste Option Disabled when Clipboard Holds Excel Range"
permalink: /kb/156/Q156236/
---

## Q156236: PRB: Paste Option Disabled when Clipboard Holds Excel Range

{% raw %}

	Article: Q156236
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The general field of a Visual FoxPro table holds an object such as a Word
	document or an Excel worksheet. This kind of object may be embedded in or linked
	to a general field by programming or manually by copying the object to the
	Clipboard, then pasting it into the general field.
	
	You may want to save to a general field only a portion of an Excel worksheet--for
	example, a range of cells without all of the other data from that worksheet.
	
	After you select the range and copy it to the Clipboard, if Excel is still open,
	OLE with Excel embeds the entire Excel worksheet when you use the Paste or Paste
	Special menu options to embed or link into the general field of a Visual FoxPro
	table. You must close Excel in order to use just the range of cells on the
	Clipboard.
	
	However, when the Clipboard contains the data of a range of cells of an Excel
	worksheet and Excel is closed, the Paste and Paste Special bars of the Visual
	FoxPro Edit menu are disabled.
	
	CAUSE
	=====
	
	When the Clipboard contains the data within a range of cells of an Excel
	worksheet, that data is not an object but, rather, is text. Because it is not an
	object, the Paste and Paste Special bars of the Edit menu are not enabled.
	
	WORKAROUND
	==========
	
	Insert an blank worksheet into the general field, then paste the data from the
	Clipboard into that sheet.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The Visual FoxPro general field is intended to hold OLE objects, either linked
	to the original object or embedded as a copy of the original object. Microsoft
	Excel does not copy the data from a range of cells as an object, but rather as
	text. On the other hand, Microsoft Word copies a text selection from a document
	into the Clipboard as a Word document. That is an object, and you can paste it
	into a Visual FoxPro general field.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. On a computer that has Microsoft Visual FoxPro, Microsoft Excel, and
	  Microsoft Word, start Excel and open any workbook.
	
	2. To select a range of cells, click the upper left corner of the range, then,
	  holding down the shift key, click the bottom right cell of the range.
	
	3. On the Edit menu, click Copy to copy the data to the Clipboard.
	
	4. Close Excel and save the "Large Clipboard" when prompted. If you do not close
	  Excel, the entire worksheet is pasted to the general field in step 10.
	
	5. Open Microsoft Word and open a new document. On the Edit menu, click Paste
	  Special. A dialog box asks whether you want to paste formatted text (.rtf) or
	  unformatted text. The Paste Link option button is disabled. The key is that
	  the Clipboard contains text, not an object.
	
	6. Close Microsoft Word and start Visual FoxPro.
	
	7. In the Command window enter the following command to start a new table
	  containing a single general field:
	
	        CREATE TABLE gentest (genfield g)
	
	8. Enter the following commands in the Command window:
	
	        APPEND BLANK
	        BROWSE
	
	9. Double-click the word "gen" in the genfield field of the one row in the
	  gentest table in the Browse window.
	
	10. On the system menu, click Edit and observe that neither Paste nor Paste
	  Special is enabled.
	
	Instead, the "Insert Object" bar is enabled, and you can use it to insert a new
	Microsoft Excel Worksheet into the Edit window holding the empty "genfield"
	field. Then you can paste the data into that worksheet.
	
	Additional query words: kbdsd VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	
	=============================================================================
	

{% endraw %}
