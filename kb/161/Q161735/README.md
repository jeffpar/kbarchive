---
layout: page
title: "Q161735: HOWTO: Save the Viewing Order of Nodes in a TreeView"
permalink: /kb/161/Q161735/
---

## Q161735: HOWTO: Save the Viewing Order of Nodes in a TreeView

{% raw %}

	Article: Q161735
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbActiveX kbCtrl kbvfp500 kbvfp600
	Last Modified: 03-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The sample BldTree.scx, located in the Vfp\Samples\Solution\Ole folder, is an
	example of how to use the TreeView Control. It allows you to add nodes to the
	TreeView and then save and restore the Nodes from a table. The algorithm that
	the sample uses saves all of the Nodes by index order. Because of this, it does
	not restore the Nodes in the same order if you added nodes using "Previous" for
	the Relationship. This article shows an algorithm that lets you save the Nodes
	in viewing order so that they can be restored in the same order.
	
	MORE INFORMATION
	================
	
	This article uses the BldTree.scx as a starting point. It will have you add two
	new command buttons to the form: one to add Nodes to the TreeView Control and a
	second to save the Nodes in viewing order to a table.
	
	The BldTree.scx can be found in the Vfp\Samples\Solution\Ole folder in Visual
	FoxPro 5.0. In Visual FoxPro 6.0, BldTree.scx can be found in
	home(2)+'solution\ole'.
	
	For this article, set the above folder as the default by typing the following
	command in the Command window in Visual FoxPro 5.0:
	
	  
	
	     SET DEFAULT TO SYS(2004)+'SAMPLES\SOLUTION\OLE'
	
	In Visual FoxPro 6.0, type the following command in the Command window:
	
	  
	
	     SET DEFAULT TO HOME(2)+'SOLUTION\OLE'
	
	1. Open the BldTree.scx in the Form Designer.
	
	2. Add two new command buttons to the form. (You may have to change the size of
	  the form to do this.)
	
	3. Change the caption of the first new command button to "Add Previous" (without
	  the quotes).
	
	4. Place the following code in the Click event:
	
	  
	
	        o = THISFORM.oleTree
	        IF !ISNULL(o.SelectedItem)
	          o.Nodes.Add(o.SelectedItem.Key, 3, THISFORM.NewKey(), "previous",0)
	        ENDIF
	
	5. Change the caption of the second new command button to "Save by View Order"
	  (without the quotes).
	
	6. Place the following code in the Click event:
	
	  
	
	         LOCAL loNodes, lcParent, lcDBFName, lcOldAlias, lcOldSafety, liIndex
	         LOCAL liTmp
	         #DEFINE WARNING_LOC "Continuing will destroy all data in the " + ;
	            "table and create a new table with three fields." + CHR(13) + ;
	            "Do you want to continue?"
	         #DEFINE WARN_LOC "Warning"
	
	         lcOldAlias = ALIAS()
	         lcOldSafety = SET("SAFETY")
	         lcDBFName = GETFILE("dbf")
	
	         IF EMPTY(lcDBFName) && User chose Cancel
	           RETURN
	         ENDIF
	
	         IF FILE(lcDBFName)
	           IF THISFORM.OpenDBF(lcDBFName, .T.) AND ;
	             THISFORM.VerifyTableStructure() AND ;
	             MESSAGEBOX(WARNING_LOC,48+256+4,WARN_LOC) = 6
	                  SET SAFETY OFF
	                  ZAP
	                  SET SAFETY &lcOldSafety
	           ELSE
	                  RETURN
	           ENDIF
	         ELSE
	           CREATE TABLE (lcDBFName) ;
	               (Key c(4), Parent c(4), Text c(60))
	         ENDIF
	
	         loNodes = THISFORM.oleTree.Nodes
	         FOR i = 1 to loNodes.Count
	            IF ISNULL(loNodes.Item(i).Parent)
	              liIndex = loNodes.Item(i).FirstSibling.Index
	              liTmp = liIndex
	              EXIT
	            ENDIF
	         NEXT
	
	         lcParent = "0_"  &&Root
	         INSERT INTO (lcDBFName) VALUES ;
	        (loNodes.Item(liIndex).key, ;
	             lcParent, ;
	             loNodes.Item(liIndex).Text)
	
	         DO WHILE liIndex <> loNodes.Item(liTmp).LastSibling.Index
	            INSERT INTO (lcDBFName) VALUES ;
	               (loNodes.Item(liIndex).Next.key, ;
	               lcParent, ;
	               loNodes.Item(liIndex).Next.Text)
	               liIndex = loNodes.Item(liIndex).Next.Index
	         ENDDO
	
	         FOR i = 1 TO loNodes.Count
	            IF loNodes.Item(i).Children > 0
	               liIndex = loNodes.Item(i).Child.Index
	               liTmp = liIndex
	               INSERT INTO (lcDBFName) VALUES ;
	                  (loNodes.Item(liIndex).key, ;
	                  loNodes.Item(liIndex).Parent.Key, ;
	                  loNodes.Item(liIndex).Text)
	               DO WHILE liIndex <> loNodes.Item(liTmp).LastSibling.Index
	                  INSERT INTO (lcDBFName) VALUES ;
	                     (loNodes.Item(liIndex).Next.key, ;
	                     loNodes.Item(liIndex).Next.Parent.Key, ;
	                     loNodes.Item(liIndex).Next.Text)
	                     liIndex = loNodes.Item(liIndex).Next.Index
	               ENDDO
	            ENDIF
	         NEXT
	
	         USE
	
	7. Save the form as Vfp\Samples\Solution\Ole\Treebld2.scx
	
	8. Run the Form and create a tree by clicking New Root twice. Select the last
	  node in the TreeView control, and then click Add Previous.
	
	9. Click Save DBF to save a table named OldSave.dbf. Then click Save By View
	  Order to save a table named NewSave.dbf.
	
	10. Click Clear, and then click Load DBF to load OldSave.dbf.
	
	11. Repeat step 10 using NewSave.dbf.
	
	You will see that the OldSave.dbf loaded the Node added with the Add Previous
	button to the bottom of the TreeView Control. But the NewSave.dbf had the Node
	added with the Add Previous button in the correct position.
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Brian
	Combs, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbActiveX kbCtrl kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
