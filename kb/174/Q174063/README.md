---
layout: page
title: "Q174063: WD97: Data in Wrong Cell After Being Pasted from Table to Graph"
permalink: /kb/174/Q174063/
---

## Q174063: WD97: Data in Wrong Cell After Being Pasted from Table to Graph

	Article: Q174063
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbgraph kbtable
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Data copied from a Microsoft Word table will be placed in the wrong cell when
	pasted into a Microsoft Graph data sheet.
	
	NOTE: This problem occurs both when you use the Paste command and when you use
	the Paste Link command. Note also that this behavior does not occur in Word
	version 7.0.
	
	CAUSE
	=====
	
	This problem occurs if the copied cells contain tabs, new line characters, or
	paragraph marks.
	
	WORKAROUND
	==========
	
	Remove tabs, new line characters, and paragraph marks from the Word table before
	you attempt to copy and paste the cells to a Microsoft Graph data sheet.
	
	To see if any of these characters is in the Word table, use either of the
	following methods to display all of the nonprinting characters.
	
	Method 1: Use the Options Dialog Box
	------------------------------------
	
	1. On the Tools menu, click Options, and click the View tab.
	
	2. Under Nonprinting Characters, click to select the All check box.
	
	Method 2: Use a Shortcut Key Combination
	----------------------------------------
	
	To display or hide all the nonprinting characters, press CTRL+SHIFT+* on the
	standard keyboard (do not press * on the numeric keypad).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbgraph kbtable 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Solution Type     : kbpending
	
	=============================================================================
	
