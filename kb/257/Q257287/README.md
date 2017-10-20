---
layout: page
title: "Q257287: PRB: RTF Control 6.0 Displays Word Tables Incorrectly"
permalink: /kb/257/Q257287/
---

## Q257287: PRB: RTF Control 6.0 Displays Word Tables Incorrectly

{% raw %}

	Article: Q257287
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCtrl kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 01-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When viewing a rich text file in a Microsoft Rich Text .OCX control on a form,
	data flows out of the table. The formatting appears incorrect when compared with
	the original document.
	
	CAUSE
	=====
	
	This behavior is by design.
	
	RESOLUTION
	==========
	
	As it is possible that the design and support of Microsoft's ActiveX controls
	may change in future versions, it is recommended that you use a Microsoft Word
	document directly on your Visual FoxPro forms, rather than the Rich Text
	control.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following code demonstrates the problem. Copy the code into a new program in
	Visual FoxPro. Run the code to see the issue. You need Microsoft Word installed
	on the test computer with Microsoft Visual FoxPro 6.0.
	
	The code automates Microsoft Word to create an .RTF file with a table. Control is
	then returned to FoxPro where a form with a Microsoft Rich Text .OCX control is
	to be created. The control displays the .RTF file made by Microsoft Word. The
	data does not appear as it did in Microsoft Word.
	
	NOTE: Microsoft Wordpad and Microsoft Notepad also display the contents of the
	.RTF file incorrectly.
	
	  CLEAR ALL
	  PUBLIC ofrmRTF, oWord
	  #DEFINE WordDocName c:\doc1.rtf
	  #DEFINE wdFormatRTF 6
	  *** wdFormatRTF=1 is DOC
	  *** wdFormatRTF=2 is some type of column format
	  *** wdFormatRTF=6 is RTF
	  *** wdFormatRTF=8 is HTML
	  ****************
	
	  ERASE WordDocName
	  oWord=CREATE([WORD.APPLICATION])
	  WITH oWord
	      .VISIBLE = .T.
	      .documents.ADD
	      .activedocument.TABLES.ADD(oWord.SELECTION.RANGE, 5 , 5)
	      .SELECTION.TypeText([125])
	      .SELECTION.MoveRight(1) && Unit:=wdCell
	      .SELECTION.TypeText([This is a test message this is a test message this is a test message])
	      .SELECTION.MoveRight(1) && Unit:=wdCell
	      .SELECTION.TypeText([1250])
	      .SELECTION.MoveRight(1) && Unit:=wdCell
	      .SELECTION.TypeText([col4])
	      .SELECTION.MoveRight(1) && Unit:=wdCell
	      .SELECTION.TypeText([col5])
	      .activedocument.SAVEAS([WordDocName], wdFormatRTF)
	      .activedocument.CLOSE
	      .documents.ADD([WordDocName])
	      .QUIT &&Necessary to have the RTF control use the document.
	  ENDWITH
	
	  ofrmRTF = CREATEOBJECT([Form])
	  WITH ofrmRTF
	      .WINDOWTYPE = 1
	      .WIDTH = 600
	      .HEIGHT = 400
	      .VISIBLE = .T.
	      .ADDOBJECT([oleRTControl], [olecontrol], [richtext.richtextctrl.1])
	      .oleRTControl.VISIBLE = .T.
	      .oleRTControl.WIDTH = ofrmRTF.WIDTH
	      .oleRTControl.HEIGHT = ofrmRTF.HEIGHT
	      WAIT WINDOW [Loading RTF file. Please wait...] TIMEOUT 1 &&Necessary to ensure that the file is available.
	      .oleRTControl.filename = [WordDocName]
	  ENDWITH
	
	  ERASE WordDocName
	  CLEAR
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kenneth
	Robison and Trevor Hancock, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbCtrl kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
