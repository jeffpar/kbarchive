---
layout: page
title: "Q195486: WD97: Changing One Caption Label Changes All Matching Captions"
permalink: /kb/195/Q195486/
---

## Q195486: WD97: Changing One Caption Label Changes All Matching Captions

	Article: Q195486
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbdta kbfield winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you modify the label for one caption, other captions that use the same
	label are also modified. In addition, if you change the numbering format, all
	related captions are also changed to reflect the new numbering format.
	
	For example, if you have the following captions in your document,
	
	  Table 1
	  Table 2
	
	if you select the "Table 2" caption, and then click Insert menu and click
	Caption, and then change the label in the Caption dialog box to "Figure,"
	(without quotation marks), the "Table 1" caption also changes.
	
	CAUSE
	=====
	
	By design, the fields that generate the caption numbering are recalculated when
	you add or change a caption.
	
	WORKAROUND
	==========
	
	To work around this problem, manually modify both the label and the SEQ field
	instead of using the Caption command (Insert menu). To do this, press SHIFT+F9
	to toggle field codes view on. The caption label and SEQ field look like this:
	
	  Table {SEQ Table \* ARABIC}
	
	To change the caption label and SEQ field to specify a Figure and to use
	lower-case roman numerals, change the field so that it looks like this:
	
	  Figure {SEQ Figure \* roman)
	
	MORE INFORMATION
	================
	
	The caption label and SEQ field use the following syntax:
	
	  Label Name {SEQ Identifier [Switches]}
	
	Label Name represents the label you specify for your caption; for example, Table,
	Figure, Equation, and so on. SEQ is the Sequence field name. The Identifier is a
	unique name that you assign to a series of items to number. The Switches are
	optional and allow you to specify the type of numbering format. The following
	switches are available:
	
	  Switch              Number Format
	  ------              -------------
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : kbualink97 kbdta kbfield winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
