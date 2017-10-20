---
layout: page
title: "Q139964: SAMPLE: How to List Directories on Entire Drive"
permalink: /kb/139/Q139964/
---

## Q139964: SAMPLE: How to List Directories on Entire Drive

{% raw %}

	Article: Q139964
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbcode kbfile kbvfp600
	Last Modified: 17-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides a sample program that builds a directory listing by using
	the outline control. It displays directory names and directory sizes in
	hierarchical order.
	
	MORE INFORMATION
	================
	
	This program creates a form that contains an outline control. You can copy and
	paste the following code into a program (.prg file) to run it. The following
	methods are essential to the program.
	
	The Fillit Method
	-----------------
	
	This method of the form builds the root of the directory tree. It also calls the
	Fill method.
	
	The Fill Method
	---------------
	
	This method fills the directory tree with directory names and sizes. It accepts
	the directory name as a parameter and uses the ADIR() function to place
	directory information into an array. This method is first executed for the root.
	A recursive call to the Fill method is then executed for each level of
	subdirectory. The tree is complete when all of the elements of the array have
	been processed.
	
	The Recalc Method
	-----------------
	
	The directory listing displays the name and the size of each directory. When an
	item is expanded and its subordinates become visible, the Recalc method
	subtracts the size of each sub-directory from the size of the parent directory.
	
	Sample Program
	--------------
	
	  *:*************************************************************************
	  *:
	  *: Procedure File C:\VFP\TESTOLE.PRG
	  *:
	  *: Documented using Visual FoxPro Formatting wizard version  .03
	  *:*************************************************************************
	  *:   TESTOLE
	  CLEAR
	  PUBLIC ocDir
	  ocDir = CREATEOBJECT("CDir")
	  ocDir.Show
	  ocDir.Fillit("c:\")
	
	  DEFINE CLASS CDir AS FORM
	     Caption = "Directories"
	     Height = 2* SYSMETRIC(2) / 3
	     nLevel = 0
	     ADD OBJECT cmdQuit AS COMMANDBUTTON WITH ;
	        CAPTION = "Quit",;
	        CANCEL = .T.
	     ADD OBJECT ole1 AS COutline
	     PROCEDURE INIT
	        THIS.ole1.Width = THIS.Width
	        * Dimensions the outline to the size of the form
	        THIS.ole1.Height = THIS.Height - THIS.ole1.Top
	
	     PROCEDURE Fillit(cRoot)    && Builds the start of the directory tree
	        LOCAL Totsize
	        IF RIGHT(cRoot,1) # '\'
	          cRoot = cRoot + '\'
	        ENDIF
	        THIS.ole1.Visible = .F.
	        THIS.ole1.AddItem(cRoot)    && Adds the root to the outline control
	        THIS.ole1.Indent[0] = 0
	        * Defines the root to the outline control
	        TotSize = THIS.Fill(cRoot)  && Method that fills the tree
	        THIS.ole1.List[0] = THIS.ole1.LIST[0] + ' : ' +  ;
	           LTRIM(TRANSFORM(Totsize,"999,999,999"))
	        THIS.ole1.Itemdata[0] = TotSize
	        THIS.ole1.Visible = .T. && Displays the control
	
	     PROCEDURE FILL(cRoot) && Fills the directory tree
	        LOCAL nNumbofFiles,I, acDirAll[1,1],nCumSize,nSize,nCount,Here
	        nCumSize = 0
	        nSize = 0
	        THIS.nLevel = THIS.nLevel + 1
	        * Places information into an array
	        nNumbofFiles = ADIR(acDirAll,cRoot + "*.*","D")
	        =ASORT(acDirAll)
	        FOR I = 1 TO nNumbofFiles
	           IF "D" $ acDirAll[i,5]   && Finds all the directories
	              IF LEFT(acDirAll[i,1],1) != '.'
	                 THIS.ole1.ADDITEM(LOWER(acDirAll[i,1]))
	                 Here = THIS.ole1.LISTCOUNT - 1
	                 THIS.ole1.Indent[Here] = THIS.nLevel &&Indents the directory
	                 nSize = THIS.FILL(cRoot + acDirAll[i,1] + '\')
	                 * Fills the directory
	                 THIS.ole1.LIST[Here] = THIS.ole1.LIST[Here] + ' : ' +;
	                    LTRIM(TRANSFORM(nSize,"999,999,999"))
	                 THIS.ole1.ITEMDATA[Here] = nSize
	                 nCumSize = nCumSize + nSize
	              ENDIF
	           ENDIF
	           IF THIS.nLevel = 1
	              THIS.ole1.nRootSize = THIS.ole1.nRootSize + acDirAll[i,2]
	           ENDIF
	           nCumSize = nCumSize + acDirAll[i,2]
	        ENDFOR
	        THIS.nLevel = THIS.nLevel - 1
	        RETURN nCumSize
	
	     PROCEDURE cmdQuit.CLICK &&Quit method for the Command Button
	        THISFORM.RELEASE
	        RELEASE WINDOW TRACE
	        RELEASE WINDOW DEBUG
	  ENDDEFINE
	
	  DEFINE CLASS COutline AS OLECONTROL
	     OleClass = "MSOutl.Outline"
	     Top = 20
	     nRootSize = 0
	
	     PROCEDURE ReCalc(nList) && Adjusts the size of the directory
	        LOCAL N,MyLevel,nSize,j,cDirName,nStart,nstartlev
	        nStart = nList
	        nStartlev = THIS.Indent[nList]
	        MyLevel = THIS.Indent[nList]
	        nSize = THIS.ITEMDATA[nlist]
	        j = nList + 1
	        DO WHILE j < THIS.LISTCOUNT AND THIS.Indent[j] > MyLevel
	           IF THIS.IsItemVisible[j]
	              nSize = nSize - THIS.ITEMDATA[j]
	           ENDIF
	           j = j + 1
	        ENDDO
	        cDirName = THIS.LIST[nlist]
	        IF  VAL(STRTRAN(SUBSTR(cDirName,AT(':',cDirName)+2),",")) # nSize
	           THIS.LIST[nList] = ;
	              LEFT(THIS.LIST[nList],AT(':',THIS.LIST[nList])) + ' ' +;
	              LTRIM(TRANSFORM(nSize,"999,999,999"))
	        ENDIF
	        nList = nStart
	        DO WHILE .T.
	           nList = nList + 1
	           IF nList = THIS.ListCount OR THIS.Indent[nList] <= nStartlev
	              EXIT
	           ELSE
	              THIS.Recalc(nList)
	           ENDIF
	        ENDDO
	
	     PROCEDURE Expand(nList)
	        THIS.Object.MousePointer = 11
	        THIS.PictureType[nList] = 1
	        THIS.Recalc(nList)
	        * Recalculates the size of each directory when the item is clicked
	        THIS.Object.MousePointer = 0
	
	     PROCEDURE Collapse(nList) && Collapses an element
	        LOCAL nSize
	        THIS.Object.MousePointer = 11
	        THIS.PictureType[nList] = 0
	        cDirName = THIS.List[nlist]
	        nSize = THIS.ItemData[nList]
	        IF  VAL(STRTRAN(SUBSTR(cDirName,AT(':',cDirName)+2),",")) # nSize
	           THIS.List[nList] =  ;
	           LEFT(THIS.LIST[nList],AT(':',THIS.LIST[nList])) + ' ' +;
	              LTRIM(TRANSFORM(nSize,"999,999,999"))
	        ENDIF
	        ni=nList+1
	        DO WHILE THIS.Indent(ni)>THIS.Indent(nList)
	        * Closes the folder when it is collapsed
	           IF THIS.PictureType(ni)=1
	             THIS.PictureType(ni)=0  &&Folder looks closed
	           ENDIF
	           ni=ni+1
	        ENDDO
	        THIS.OBJECT.MOUSEPOINTER = 0
	  ENDDEFINE
	
	REFERENCES
	==========
	
	For more information about the outline control, search for "Outline Control" in
	the Visual FoxPro Help file.
	
	Additional query words: VFoxWin ocx
	
	======================================================================
	Keywords          : kbcode kbfile kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP600
	Version           : 3.00
	
	=============================================================================
	

{% endraw %}
