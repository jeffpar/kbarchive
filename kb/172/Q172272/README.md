---
layout: page
title: "Q172272: SAMPLE: TREEVIEW.EXE Manipulating Nodes in a TreeView Control"
permalink: /kb/172/Q172272/
---

## Q172272: SAMPLE: TREEVIEW.EXE Manipulating Nodes in a TreeView Control

	Article: Q172272
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbsample kbActiveX kbTreeView kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This sample illustrates how to manipulate nodes with the TreeView control. It
	also illustrates how to save the node information to an Access database, and
	then restore them. Additionally, this sample implements the drag-and-drop
	feature for TreeView control nodes.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Treeview.exe
	  (http://download.microsoft.com/download/vb60pro/Install/1/W9XNT4/EN-US/Treeview.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The purpose of this TreeView sample is to demonstrate the basics of using and
	manipulating the TreeView control. This example shows how to add Nodes using the
	five different relationship settings of the Nodes Collection Add Method. It will
	also allow you to remove a selected Node or branch.
	
	The main focus of the example is to show how to save and restore the Nodes into
	an Access Database. The algorithm that you use saves the Nodes in viewing order.
	This allows you to save and restore the TreeView control with the Nodes in the
	same order as they appeared to the user when the user closed the application.
	
	The sample also shows how to drag and drop Nodes. You can also drag and drop a
	Node on top of a different Node so that the dragged Node is now the child of the
	Node it was dropped on.
	
	For more information on the TreeView control please see Help or page 453 of the
	Professional Features Custom Control Reference.
	
	To use this sample, open Treeview.vbp in the VB IDE and press the F5 key or
	choose Start from the Run menu.
	
	The following files are included with this sample.
	
	Readme.txt
	Treeview.vbp
	Bldtree.frm
	Bldtree.frx
	
	(c) Microsoft Corporation 2000, All Rights Reserved.
	Contributions by Brian Combs, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kbActiveX kbTreeView kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
