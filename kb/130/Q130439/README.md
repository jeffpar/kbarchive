---
layout: page
title: "Q130439: Code Comparison: Visual FoxPro Grid &amp; Clipper/DOS Tbrowse"
permalink: /kb/130/Q130439/
---

## Q130439: Code Comparison: Visual FoxPro Grid &amp; Clipper/DOS Tbrowse

	Article: Q130439
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbcode
	Last Modified: 03-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	CA-Clipper version 5.x has five predefined classes built into its language. One
	of these is the Tbrowse class, which is similar to Visual FoxPro's Grid class.
	This article compares the two.
	
	NOTE: This article only describes how to create a Grid control in a program.
	Grids can also be created visually through drag-drop and the Visual Class
	Designer.
	
	MORE INFORMATION
	================
	
	Clipper actually provides two Tbrowse classes - TbrowseDB() and TbrowseNew().
	TbrowseDB() browses tables, and TbrowseNew() browses other data sources, such as
	text files and arrays.
	
	Below are comparisons of how to browse a table that contains three columns. In
	each comparison, the Clipper code is shown followed by the equivalent program in
	Visual FoxPro.
	
	NOTE: Run the following program first to create the TEST table used in the
	comparisons.
	
	     *** Code to create the TEST table ***
	     &&   In Clipper, execute these 5 lines:
	     &&   aDbf := {}
	     &&   AADD(aDbf, { "Fld1", "N", 3, 0 })
	     &&   AADD(aDbf, { "Fld2", "C", 4, 0 })
	     &&   AADD(aDbf, { "Fld3", "C", 20, 0 })
	     &&   DBCREATE("Test",aDbf)
	
	     &&   In FoxPro, execute the next line:
	     &&   CREATE TABLE Test (fld1 n(3),fld2 c(4),fld3 c(20))
	
	     USE Test
	     FOR i=1 TO 50
	       APPEND BLANK
	       REPLACE Fld1 WITH i
	       REPLACE Fld2 WITH ALLTRIM(STR(i))
	       REPLACE Fld3 WITH REPLICATE(CHR(64+i),20)
	     NEXT
	     CLOSE ALL
	     *** End of code to create TEST table ***
	
	Clipper
	-------
	
	     #include "inkey.ch"
	     #include "setcurs.ch"
	
	     #define  MYCOLORS   "BG/B,RB+/W,W/N,N,GR+/W,G+/B,R+/B,GR+/B"
	     #define  HEADSEP    CHR(205) + CHR(209) + CHR(205)
	     #define  COLSEP     CHR(32)  + CHR(179) + CHR(32)
	
	     FUNCTION Main()
	        LOCAL b, column, nKey
	        SET SCOREBOARD OFF
	        SET DATE       BRITISH
	        SET CONFIRM    ON
	
	        USE test
	
	        SETCURSOR(SC_NONE)
	        SETCOLOR("N/W")
	        SCROLL()
	        SETCOLOR("BG/B,RB+/W,,,BG/N")
	        SCROLL( 2, 6, 22, 72 )
	        @  2, 6 TO 22,72 DOUBLE
	
	        b := TBrowseDB( 3, 7, 21, 71 )
	        b:colorSpec := MYCOLORS
	        b:colSep  := COLSEP
	        b:headSep := HEADSEP
	
	        // Custom Skipper
	        b:skipBlock     := {|nRecs| Skipper( nRecs )}
	
	        // TBColumn objects
	        column := TBColumnNew( "Field 1", {|| test->fld1} )
	        b:addColumn( column )
	        column := TBColumnNew( "Field 2", {|| test->fld2} )
	        b:addColumn( column )
	        column := TBColumnNew( "Field 3", {|| test->fld3} )
	        b:addColumn( column )
	
	        WHILE .T.
	           WHILE ( !b:stabilize() )
	              nKey := INKEY()
	              IF ( nKey != 0 )
	                 EXIT
	              ENDIF
	           END
	
	           IF ( b:stable )
	              nKey := INKEY(0)
	           ENDIF
	
	           // Process key
	           IF ( nKey == K_DOWN )
	              b:down()
	           ELSEIF ( nKey == K_UP )
	              b:up()
	           ELSEIF ( nKey == K_PGDN )
	              b:pageDown()
	           ELSEIF ( nKey == K_PGUP )
	              b:pageUp()
	           ELSEIF ( nKey == K_CTRL_PGUP )
	              b:goTop()
	           ELSEIF ( nKey == K_CTRL_PGDN )
	           b:goBottom()
	           ELSEIF ( nKey == K_RIGHT )
	              b:right()
	           ELSEIF ( nKey == K_LEFT )
	              b:left()
	           ELSEIF ( nKey == K_HOME )
	              b:home()
	           ELSEIF ( nKey == K_END )
	              b:end()
	           ELSEIF ( nKey == K_CTRL_LEFT )
	              b:panLeft()
	           ELSEIF ( nKey == K_CTRL_RIGHT )
	              b:panRight()
	           ELSEIF ( nKey == K_CTRL_HOME )
	              b:panHome()
	           ELSEIF ( nKey == K_CTRL_END )
	           b:panEnd()
	           ELSEIF ( nKey == K_ESC )
	              SCROLL()
	              EXIT
	           ENDIF
	        END
	     RETURN NIL
	
	     STATIC FUNCTION Skipper( nRequest )
	        LOCAL nActually := 0
	
	        IF (nRequest == 0)
	           SKIP 0
	        ELSEIF (nRequest > 0) .AND. (!EOF())
	           WHILE (nActually < nRequest)
	              SKIP
	              IF EOF()
	                 SKIP -1
	                 EXIT
	              ENDIF
	              nActually++
	           END
	        ELSEIF (nRequest < 0)
	           WHILE (nActually > nRequest)
	              SKIP -1
	              IF BOF()
	              EXIT
	              ENDIF
	              nActually--
	           END
	        ENDIF
	        RETURN nActually
	
	Visual FoxPro
	-------------
	
	     USE test
	     oFormwgrid = CREATEOBJECT("MyForm")
	     oFormwgrid.show
	     READ EVENTS
	
	     DEFINE CLASS MyForm AS Form
	       Width=400
	       Height=250
	       ADD OBJECT b AS MyGrid
	     ENDDEFINE
	
	     DEFINE CLASS MyGrid AS Grid
	       Left=7
	       Top=1
	       Width=340
	       Height=240
	       ColumnCount=3
	
	       Column1.ControlSource='fld1'
	       Column2.ControlSource='fld2'
	       Column3.ControlSource='fld3'
	       Column1.Width=50
	       Column3.Width=200
	
	       PROCEDURE init
	         This.Column1.Header1.Caption='Field 1'
	         This.Column2.Header1.Caption='Field 2'
	         This.Column3.Header1.Caption='Field 3'
	       ENDPROC
	     ENDDEFINE
	
	Clipper is an MS-DOS-based product, so you don't need to create a window for the
	browse. However, because Visual FoxPro is a Windows-based product, you need to
	create a window for it.
	
	The DEFINE CLASS section creates a subclass of the Form class, and the
	oFormwgrid=CREATEOBJECT("MyForm") line creates an instance of that object.
	
	Visual FoxPro
	-------------
	
	     oFormwgrid=CREATEOBJECT("MyForm")
	     oFormwgrid.show
	
	     ..
	
	     DEFINE CLASS MyForm AS Form
	
	     ..
	
	     ENDDEFINE
	
	Once you have created a window, you can add the Grid to it. Again, you will
	sub-class the Grid class and create an instance of it with the ADD OBJECT b AS
	MyGrid line.
	
	Clipper
	-------
	
	     b := TBrowseDB( 3, 7, 21, 71 )
	
	Visual FoxPro
	-------------
	
	     ...
	
	     ADD OBJECT b AS MyGrid
	
	     ...
	
	     DEFINE CLASS MyGrid AS Grid
	       Left=7
	       Top=1
	       Width=340
	       Height=240
	       ColumnCount=3
	
	     ...
	
	     ENDDEFINE
	
	Now you can add columns to the Grid. Clipper creates a new column in the Tbrowse
	by creating an instance of the TBColumnNew class and then passing its handle to
	the addcolumn method of the Tbrowse.
	
	In Visual FoxPro, you already set the property 'ColumnCount' to 3 in the
	sub-class, so you can just assign Column X's ControlSource property to the
	desired value. While the Grid is being initialized, you can set the titles of
	the column headers in the PROCEDURE init.
	
	Clipper
	-------
	
	     column := TBColumnNew( "Field 1", {|| test->fld1 })
	     b:addColumn( column )
	     column := TBColumnNew( "Field 2", {|| test->fld2 })
	     b:addColumn( column )
	     column := TBColumnNew( "Field 3", {|| test->fld3 })
	     b:addColumn( column )
	
	Visual FoxPro
	-------------
	
	     Column1.ControlSource='Test.fld1'
	     Column2.ControlSource='Test.fld2'
	     Column3.ControlSource='Test.fld3'
	
	     PROCEDURE init
	       This.Column1.Header1.Caption='Field 1'
	       This.Column2.Header1.Caption='Field 2'
	       This.Column3.Header1.Caption='Field 3'
	     ENDPROC
	
	The objects properties and methods are set in both products so you can now give
	it life. Clipper does this through the stabilize method, DO .. WHILE loops and
	INKEY(). Visual FoxPro ties in with the Windows event model so you can just
	issue the READ EVENTS command.
	
	Clipper
	-------
	
	     WHILE ( !b:stabilize() )
	       nKey := INKEY()
	       IF ( nKey != 0 )
	         EXIT
	       ENDIF
	     END
	
	     IF ( b:stable )
	       nKey := INKEY(0)
	     ENDIF
	
	Visual FoxPro
	-------------
	
	     READ EVENTS
	
	Clipper/DOS is manufactured by Computer Associates, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: VFoxWin ca clipper for dos 5.01 akz
	
	======================================================================
	Keywords          : kb3rdparty kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
