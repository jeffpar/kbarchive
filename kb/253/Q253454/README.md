---
layout: page
title: "Q253454: Visual FoxPro 6.0 Sample: Demonstrates the TreeView Control"
permalink: kb/253/Q253454/
---

## Q253454: Visual FoxPro 6.0 Sample: Demonstrates the TreeView Control

	Article: Q253454
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbfile kbSample kbActiveX kbCtrl kbvfp600 kbGrpDSFox kbDSupportkbfaq
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	TreeView.exe is a sample that illustrates the use of the properties and methods
	of the ActiveX TreeView control by using Visual FoxPro code.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  TreeView.exe
	  (http://download.microsoft.com/download/vfox60/sample2/6/WIN98/EN-US/TreeView.exe)
	
	Release Date: May-24-2000
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The TreeView.exe file contains the following files:
	
	+-----------------------+
	| File Name    | Size   | 
	+-----------------------+
	| ReadMe.txt   | 3,323  | 
	+-----------------------+
	| TreeView.pjx | 2,363  | 
	+-----------------------+
	| TreeView.pjt | 4,554  | 
	+-----------------------+
	| TreeView.scx | 8,990  | 
	+-----------------------+
	| TreeView.sct | 61,528 | 
	+-----------------------+
	| AddNode.scx  | 3,431  | 
	+-----------------------+
	| AddNode.sct  | 13,705 | 
	+-----------------------+
	| Closed.bmp   | 222    | 
	+-----------------------+
	| Happy.bmp    | 382    | 
	+-----------------------+
	| Leaf.bmp     | 222    | 
	+-----------------------+
	| Minus.bmp    | 222    | 
	+-----------------------+
	| Open.bmp     | 222    | 
	+-----------------------+
	| Plus.bmp     | 222    | 
	+-----------------------+
	
	A tree view is a way of presenting information in a hierarchical format that
	looks like an upside-down tree. Like branches on a tree, the tree view has
	branches of information that start from a root point. Individual points on the
	tree stop at a leaf or split to form more branches or leaves. Each one of these
	points on the tree is referred to as a node. A node can be a final point on a
	branch or it can have its own set of nodes, called child nodes. Nodes that have
	child nodes are referred to as parent nodes. The nodes located at the very top
	of the tree view are referred to as root nodes. Root nodes do not have parent
	nodes, but they can have sibling nodes (nodes located on the same branch).
	
	The TreeView control contains, organizes, and presents Node objects in a tree
	view. A Node object contains an index, key value, and text (or label). You must
	specify a key value and text for the node. The key value must be a unique value
	for that node in the collection. The index is created when you add a node to the
	collection. If you want, you may include an ImageList control on the form
	containing the TreeView control to specify images that may be used by TreeView.
	This allows you to specify a default image, selected image, or an expanded image
	for each node. The selected image appears for a node while that node in TreeView
	has the focus. The expanded image appears when a parent node has been expanded
	so that its child nodes are visible in TreeView.
	
	The first node added to a tree view is a root node. Each node added after that
	may be another root node or a node that has a relationship to a node that has
	already been added. If you are adding a node that has a relationship, you are
	required to specify the key value of the node to which the new node is related
	and the relationship to that node. There are five types of relationships that
	you may specify for a new node:
	
	- Child - this creates the new node as a child node for the related node.
	
	The following four relationship types create sibling nodes for the related node
	and allow you to specify where the new node is placed in relationship to the
	related node:
	
	- First
	- Last
	- Next
	- Previous
	
	The default relationship is Next.
	This example contains a project (TreeView) that contains two forms (TreeView,
	AddNode) and six bitmap (.bmp) files. The TreeView form contains TreeView as
	well as other controls that allow you to manipulate or view the properties of
	the TreeView form as well as the currently selected node in TreeView. There are
	ToolTips that help explain the purpose of the property that is being controlled
	or displayed. There are also command buttons that contain code so that you may
	see how to build the Nodes collection of TreeView, expand and collapse all the
	nodes in the TreeView, plus add and remove nodes from the TreeView. There is
	also an ImageList control so that you can see how to include images on the
	TreeView. The second form (AddNode) provides a user interface to add nodes to
	the TreeView. This allows you to try the five different types of relationships
	for the new node.
	
	REFERENCES
	==========
	
	For more information about the TreeView control, please see that topic in the
	Windows Controls Help file, CMCTL198.CHM, located where you have installed your
	MSDN Library.
	
	For additional information on the TreeView control, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q161735 HOWTO: Save the Viewing Order of Nodes in a TreeView
	
	  Q163803 BUG: Cannot Set ImageList Property of Treeview Visually
	
	  Q176270 Treewrap.exe - Sample TreeView Control in Visual FoxPro
	
	Additional query words: TreeView
	
	======================================================================
	Keywords          : kbfile kbSample kbActiveX kbCtrl kbvfp600 kbGrpDSFox kbDSupport kbfaq
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
