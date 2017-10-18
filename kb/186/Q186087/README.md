---
layout: page
title: "Q186087: PRB: Perceived Problems Populating General Fields Using Word"
permalink: kb/186/Q186087/
---

## Q186087: PRB: Perceived Problems Populating General Fields Using Word

	Article: Q186087
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After embedding a Word Document into a Visual FoxPro General field, various
	discrepancies may occur after activating Word to view the information.
	
	- If the General field in a Browse window or an OLE bound control that contains
	  the General field is double-clicked, Word opens and shares the menu with
	  Visual FoxPro, which is called In-Place activation. Menu items, under the
	  FILE menu used for Saving or Printing are dimmed.
	
	- When using @ SAY's or the DoVerb method of a OLE bound control to modify the
	  General field, problems may occur exiting from that instance of Word using
	  the FILE - RETURN menu items. The open document closes, but Word does not
	  close and return to Visual FoxPro.
	
	- When using @ SAY's or the DoVerb method to access information in the General
	  fields, the Paper Size of an embedded Word document changes from "Letter" to
	  "Custom" although the Word document was saved with a Paper Size setting of
	  "Letter". This occurs with In-Place activation also, but does not occur in
	  every case.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	You may access information in a General field with In-Place activation. This is
	where the application that created the information opens in a window and shares
	menu items with Visual FoxPro's menu items. Whether this is done by
	double-clicking the General field in a Browse window or by double-clicking an
	OLE bound control in a form, there Is no way to save or print the information
	using the Save or Print menu items under the FILE menu pad. Since the
	information is already in the General field, as soon as the session of Word
	ends, the information updates in the General field. If the information is to be
	printed, an OLE bound control needs to be in the Report Designer so that FoxPro
	can perform the printing.
	
	A second way to access the information in a General field is to use @ SAY's or
	the DoVerb method of an OLE bound control. After using one of these methods to
	call Word and display information, returning to Visual FoxPro from that session
	of Word using the FILE - CLOSE & RETURN TO UNNAMED menu items, closes the
	open document. However, Word does not quit and return to FoxPro. This is a
	problem with Word. Notice the fact that Word does not know who passed it the
	information by looking at the third menu item under the FILE menu pad. "Close
	& Return to Unnamed " shows that Word does not know where to return after
	quitting. When accessing a General field that has information from Excel, Excel
	knows where to return.
	
	When you use @ SAY's or the DoVerb method, the Paper Size of an embedded Word
	document changes from "Letter" to "Custom" even though the Word document was
	saved with a Paper Size setting of "Letter". This also happens when using
	In-Place activation. The width of the information displayed in Word when using @
	SAY's depends on wither there are any windows defined in FoxPro or not. Word
	takes these "defined window" sizes and displays the information in Word
	accordingly. If there are no windows defined, then the information displays as
	close as possible to the desktop width of Visual FoxPro. The width of the OLE
	bound control determines the width of the information displayed in Word when
	using OLE bound controls. Making the OLE bound control wider or narrower results
	in the information in Word becoming wider or narrower.
	
	NOTE: If the information has been saved in the General field as an icon, the
	Paper size remains at whatever it was set to when it was created.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a table that contains a General field.
	
	2. Populate the General field by browsing the table and double-clicking the
	  General field. After the table opens, choose INSERT OBJECT from the EDIT
	  menu. Select Create New and "Microsoft Word Document" from the Object Type
	  list box. Do not select the Icon check box. Type some information into the
	  Word document and close Word by selecting Close from the File menu.
	
	3. To look at the information through In-Place activation, edit the General
	  field by double-clicking the Word object in the General field to open Word.
	  Select the FILE menu and note that menu items for saving or printing are
	  dimmed.
	
	4. From the FILE menu, select PAGE SETUP or double-click the ruler at the top of
	  the document if the ruler available. Note that the paper size is Custom under
	  the Paper Size tab.
	
	5. In the FoxPro Command window, issue the following command:
	
	        @ 1,1 SAY <general field> VERB "Edit"
	
	6. Follow step 4. From the FILE menu, choose RETURN TO UNNAMED noting that Word
	  closes the document that is currently open. However, Word does not close. You
	  must manually close Word by selecting Exit from the File menu or by clicking
	  the Close button in the upper right hand corner of Word's window.
	
	Additional query words: kbDSupport kbdse
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbprb
	
	=============================================================================
	
