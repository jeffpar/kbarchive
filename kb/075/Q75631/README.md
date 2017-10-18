---
layout: page
title: "Q75631: XLTABLE Clipboard Format Documentation Available"
permalink: kb/075/Q75631/
---

## Q75631: XLTABLE Clipboard Format Documentation Available

	Article: Q75631
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	XLTABLE is a new clipboard format developed for use in dynamic-data exchange
	(DDE) conversations with Microsoft Excel.
	
	Using this format instead of BIFF (the Binary Interchange File Format) results in
	faster conversations. Code to read and write this format is also easier to
	implement. The format does not introduce translation problems that can occur
	when putting text on the clipboard.
	
	The "Microsoft Excel Software Development Kit," part number 065-000- 020,
	describes all the Excel file formats. In the United States, this document is
	available for $20.00 through the Microsoft Consultant Relations Program by
	calling (800) 227-4679. Outside the United States, contact the Microsoft
	subsidiary that supports your country for pricing and availability information.
	
	MORE INFORMATION
	================
	
	The following information documents the XLTABLE data format:
	
	FAST FILE FORMAT
	----------------
	
	The Fast DDE Table data consists of multiple simple_datablocks, one after the
	other:
	
	  Fast_DDE_Table = <simple_datablock> <simple_datablock> ...
	     <simple_datablock>
	
	A simple_datablock has three parts:
	
	   WORD tdt;       // The table datatype
	   WORD cb;        // The size (in bytes) of the data part
	   BYTE data[];    // There are cb bytes in this part
	
	Description of the Table Datatypes:
	
	tdt         Value    Meaning
	---         -----    -------
	
	tdtTable    0x0010   Gives the size of the table. The cb is 4.
	                    The data (4 bytes) has two words: the first
	                    word is the number of rows, the second word
	                    is the number of columns.
	
	tdtFloat    0x0001   The data contains floating point values in IEEE
	                    real format. The size of each entry is 8 bytes.
	
	tdtString   0x0002   The data contains strings in "st" format. In this
	                    format, the first byte gives the length of the
	                    string, and the following bytes make up the
	                    string. The string is not null-terminated.
	
	tdtBool     0x0003   Boolean values: 1 = TRUE, 0 = FALSE
	                    Each entry is 2 bytes.
	
	tdtError    0x0004   Error values for the cell:
	                        0  = #NULL!
	                        7  = #DIV/0!
	                        15 = #VALUE!
	                        23 = #REF!
	                        29 = #NAME?
	                        36 = #NUM!
	                        42 = #N/A
	                    Each entry is 2 bytes.
	
	tdtBlank    0x0005   The cb is 2. The data (2 bytes) has one word.
	                    The value of the word is the number of blank cells.
	
	tdtType     0x0080   Not used. Gives the type of the cell. Each entry
	                    is 2 bytes.
	
	tdtFormat   0x0081   Not used. Gives the format of the cell (0-
	                    relative index into the format table as shown in
	                    the Format Number dialog box). Each entry is 2
	                    bytes.
	
	Order of the cells: The first simple_datablock must be of type tdtTable. This
	record provides the number of rows and columns. This is followed by rows*cols
	cells represented by the subsequent simple_datablocks. The cells are represented
	row-wise, (all cells of the first row are listed first, then all cells of the
	second row, and so on).
	
	For example, the Fast DDE Table for a selection consisting of three cells in a
	row, containing the strings "East", "West", and "North", respectively, will
	resemble the following:
	
	  10 00 04 00 01 00 03 00    - tdtTable, 4, 1, 3
	  02 00 10 00                - tdtString, 16
	     04 45 61 73 74          - 4, East
	     04 57 65 73 74          - 4, West
	     05 4e 6f 72 74 68       - 5, North
	
	Additional query words: 3.00 3.10 DDE clipboard
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
