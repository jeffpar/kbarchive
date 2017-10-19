---
layout: page
title: "Q170162: INFO: VB 6.0 Readme Part 3: Control Issues"
permalink: /kb/170/Q170162/
---

## Q170162: INFO: VB 6.0 Readme Part 3: Control Issues

	Article: Q170162
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbreadme kbtophit kbActiveX kbCtrl kbDHTML kbPageDesigner kbVBp kbVBp600 kbVS6
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The information below includes the documentation and workarounds for Visual
	Basic 6.0. This information can also be found in the README.htm file that ships
	with Visual Basic 6.0 on the Visual Basic 6.0 CD-ROM. Please see the REFERENCES
	section of this article for a list of the Microsoft Knowledge Base articles
	relating to the Visual Basic 6.0 readme.
	
	Following is a list of all parts of the readme file:
	
	Part 1. Important Issues - Please Read First!
	Part 2. Data Access Issues and DataBinding Tips
	Part 3. Control Issues
	Part 4. Language Issues
	Part 5. Samples Issues
	Part 6. Wizard Issues
	Part 7. Error Message Issues
	Part 8. WebClass Designer Issues
	Part 9. DHTML Page Designer Issues
	Part 10. Extensibility issues
	Part 11. Miscellaneous Issues
	Part 12. Microsoft Transaction Server (MTS) Issues
	Part 13. Dictionary Object
	Part 14. Visual Component Manager
	Part 15. Application Performance Manager
	
	MORE INFORMATION
	================
	
	Lightweight Controls Must Be Borderless
	---------------------------------------
	
	When creating a lightweight User control by setting the Windowless property to
	True, the BorderStyle property is invalidated. By definition a lightweight
	control has no border.
	
	If you first set the BorderStyle property to anything other than 0 - None and
	subsequently change the Windowless property to True, you will receive an error
	message "Windowless UserControls only support BorderStyle = None". Run Time
	Error 711: Compiled .Exe Doesn't Contain Information About Unreferenced Control
	Causing Controls.Add to Fail
	
	Problem:
	
	1. Create a new Standard EXE. Form1 is created by default.
	
	2. Add a user control to the project.
	
	3. Add the following code:
	
	        Dim WithEvents x as VBControlExtender
	
	        Private Sub Form_Load ()
	            Set x = Controls.Add ("Project1.Usercontrol1", "XX")
	            x.Visible = True
	        End Sub
	
	4. On the File menu, click Make Project1.exe (Don't run the project.)
	
	5. Run the EXE.
	
	  Result: You get an error (711) stating that Project1.Usercontrol1 is an
	  invalid ProgID since no info about it can be found in the exe.
	
	  Solution: Before compiling the project, under the Project menu, click Project1
	  Properties. On the Make tab, clear the "Remove information about unused
	  ActiveX controls" check box.
	
	Remarks
	
	By default, ActiveX controls that are referenced but not placed on any type of
	form at design time are not available for Controls.Add at runtime or in an
	executable.
	
	Hierarchical FlexGrid Control: ColWordWrapOption, ColWordWrapOptionBand,
	
	ColWordWrapOptionFixed, ColWordWrapOptionHeader Properties
	----------------------------------------------------------
	
	The following properties are part of the Hierarchical FlexGrid control's feature
	set but are not documented in the control's help:
	
	ColWordWrapOption, ColWordWrapOptionBand, ColWordWrapOptionFixed,
	ColWordWrapOptionHeader. Descriptions and syntaxes for these properties are
	found below. Settings for all properties are the same, and can be found at the
	bottom of the topic:
	
	ColWordWrapOption Property
	Returns or sets a value that specifies how text is wrapped in a specified
	column.
	Syntax
	
	  object.ColWordWrapOption (Index) = integer
	
	The ColWordWrapOption property syntax has these parts:
	
	  Part                  Description
	  ----------------------------------------------------
	  object         An object expression that evaluates to a Hierarchical
	                 FlexGrid control.
	
	  Index          Long. The number of the column to get or set word wrap
	                 on. The value must be in the range of -1 to Cols - 1.
	                 Setting this value to -1 selects all columns.
	
	  integer        A numeric expression that determines how words will wrap,
	                 as shown in settings.
	
	ColWordWrapOptionBand Property
	Returns or sets a value that specifies how text is wrapped in a specified band.
	
	Syntax
	
	  object.ColWordWrapOptionBand (BandNumber, BandColIndex) = integer
	
	The ColWordWrapOption property syntax has these parts:
	
	  Part                  Description
	  ----------------------------------------------------
	  object         An object expression that evaluates to a Hierarchical
	                 FlexGrid control.
	
	  BandNumber     Long. The number of the band to get or set word wrap on.
	                 The value must be in the range of 0 to Bands - 1.
	
	  BandColIndex   Long. The number of the column to get or set word wrap
	                 on. This optional parameter defaults to -1, indicating
	                 all columns in the band. Valid values are -1 to Cols -1.
	
	  integer        A numeric expression that determines how words will wrap,
	                 as shown in settings.
	
	ColWordWrapOptionBand Property
	Returns or sets a value that specifies how text is wrapped in a specified band.
	
	Syntax
	
	  object.ColWordWrapOptionBand (BandNumber, BandColIndex) = integer
	
	The ColWordWrapOption property syntax has these parts:
	
	  Part              Description
	  ---------------------------------------------------------------
	  object         An object expression that evaluates to a
	                 Hierarchical FlexGrid control.
	
	  BandNumber     Long. The number of the band to get or set
	                 word wrap on. The value must be in the range
	                 of 0 to Bands - 1.
	
	  BandColIndex   Long. The number of the column to get or set
	                 word wrap on. This optional parameter
	                 defaults to -1, indicating all columns in the
	                 band. Valid values are -1 to Cols -1.
	
	  integer        A numeric expression that determines how
	                 words will wrap, as shown in settings.
	
	ColWordWrapOptionFixed Property
	Returns or sets a value that specifies how text is wrapped in a specified fixed
	column.
	
	Syntax
	
	  object.ColWordWrapOptionFixed(index) = integer
	
	The ColWordWrapOptionFixed property syntax has these parts:
	
	  Part                  Description
	  ----------------------------------------------------
	  object         An object expression that evaluates to a Hierarchical
	                 FlexGrid control.
	
	  index          Long. The number of the column to get/set word wrap on.
	                 This optional parameter defaults to -1. Valid values are
	                 -1 to Cols -1.
	
	  Integer        A numeric expression that determines how words will wrap,
	                 as shown in settings.
	
	ColWordWrapOptionFixed Property
	Returns or sets a value that specifies how text is wrapped in a specified fixed
	column.
	
	Syntax
	
	  object.ColWordWrapOptionFixed(index) = integer
	
	The ColWordWrapOptionFixed property syntax has these parts:
	
	  Part              Description
	  ------------------------------------------------------------------
	  object         An object expression that evaluates to a
	                 Hierarchical FlexGrid control.
	
	  index          Long. The number of the column to get/set
	                 word wrap on. This optional parameter
	                 defaults to -1. Valid values are -1 to Cols
	                 -1.
	
	  integer        A numeric expression that determines how
	                 words will wrap, as shown in settings.
	
	ColWordWrapOptionHeader Property
	Returns or sets a value that specifies how text is wrapped in column headers.
	
	Syntax
	
	  object.ColWordWrapOptionHeader(BandNumber, BandColIndex) = integer
	
	The ColWordWrapOptionHeader property syntax has these parts:
	
	  Part              Description
	  --------------------------------------------------------------------
	  object          An object expression that evaluates to a
	                  Hierarchical FlexGrid control.
	
	  BandNumber      Long. The number of the band to get/set word
	                  wrap on. The value must be in the range of 0
	                  to Bands - 1.
	
	  BandColIndex    Long. The number of the column to get/set
	                  word wrap on. This optional parameter
	                  defaults to -1 indicating all column headers
	                  in the band. Valid values are -1 to Cols -1.
	
	  integer         A numeric expression that determines how
	                  words will wrap, as shown in settings.
	
	Settings
	The settings for integer are:
	
	  Constant             Value    Description
	  ------------------------------------------------------------
	  flexSingleLine       0       (Default) Displays text on a
	                               single line only.
	
	  flexWordBreak        1       The lines are automatically
	                               broken between words.
	
	  flexWordEllipsis     2       Truncates text that does not
	                               fit in the rectangle and adds
	                               ellipsis.
	
	  flexWordBreakEllip   3       Breaks words between lines and
	  sis                          adds ellipsis if text doesn't
	                               fit in the rectangle.
	
	Hierarchical FlexGrid Control: ColIsVisible and RowIsVisible Properties are
	
	Read Only
	---------
	
	The ColIsVisible and RowIsVisible properties are read-only properties and cannot
	be set programmatically. You can use the properties to test whether a column or
	row is visible, and hide the column or row, if appropriate, as show below:
	
	    With MSHFlexGrid1
	       If .ColIsVisible(1) Then .ColWidth(1) = 0
	       If .RowIsVisible(1) Then .RowHeight(1) = 0
	    End With
	
	Hierarchical FlexGrid Control: Additional Settings for GridLines, GridLinesBand,
	GridLinesFixed, GridLinesHeader, GridLinesIndent, and
	
	GridLinesUnpopulated Properties
	-------------------------------
	
	Two additional settings are possible for the following properties:
	
	ridLines, GridLinesBand, GridLinesFixed, GridLinesHeader, GridLinesIndent,
	GridLinesUnpopulated Properties. The possible settings are show in the table
	below:
	
	  Constant             Value    Description
	  ---------------------------------------------------------------
	  flexGridDashes       4        Dashed Lines. Sets line style
	                                between cells to dashed lines.
	
	  flexGridDots         5        Dotted Lines. Sets line style
	                                between cells to dotted lines.
	
	Remarks:
	
	These settings can be used in addition to flexGridNone, flexGridFlat,
	flexGridInset and flexGridRaised.
	
	DataRepeater Control: Setting Public Properties Affect only the Current
	
	Control
	-------
	
	When creating a user control to be used in a DataRepeater control, be aware that
	public properties of the control will be set only on the current control (the
	"live" control with the focus). For example, if you expose the Font property of
	a user control, at run time, resetting that property (as shown in the example
	code below) will only affect the current control in the DataRepeater control.
	The font of repeated controls will not be affected.
	
	    Private Sub Command1_Click()
	       ' Only the current control's Font will be affected.
	       DataRepeater1.RepeatedControl.FontName = "Courier"
	    End Sub
	
	The corresponding code in the user control would resemble the following:
	
	    Public Property Get FontName() As String
	       FontName = txtProductName.Font.Name
	    End Property
	    Public Property Let FontName(ByVal newFontName As String)
	       txtProductName.Font.Name = newFontName
	    End Property
	
	TabStrip Control: Separators show only when the Style property =
	
	TabFlatButtons
	--------------
	
	Separators will only appear on a TabStrip control when the Style property is set
	to TabFlatButtons. An example is shown below:
	
	    Private Sub Form_Load()
	       With TabStrip1
	          .Style = tabFlatButtons
	          .Separators = True
	       End With
	    End Sub
	
	Data Report Designer: Error in Event Handling Code
	--------------------------------------------------
	
	In the topic titled Data Report Events, there is an error in code that shows how
	to handle asynchronous errors. For more information, search online, with Search
	titles only selected, for "Data Report Events" in the MSDN Library Visual Studio
	6.0 documentation.
	
	The code is found under the heading "Error Events' for Asynchronous Events." The
	code omits a "Select Case ErrObj.ErrorNumber" statement. The corrected code is:
	
	     Private Sub DataReport_Error(ByVal JobType As _
	     MSDataReportLib.AsyncTypeConstants, ByVal Cookie As Long, _
	      ByVal ErrObj As MSDataReportLib.RptError, ShowError As Boolean)
	        Select Case ErrObj.ErrorNumber
	           Case rptErrPrinterInfo ' 8555
	              MsgBox "A printing error has occurred. " & _
	               "You may not have a Printer installed."
	              ShowError = False
	              Exit Sub
	           Case Else ' handle other cases here.
	              ShowError = True
	        End Select
	     End Sub
	
	RichTextBox Control: SelPrint Method Has New Argument
	-----------------------------------------------------
	
	The SelPrint method now features a second, optional argument. The syntax and part
	descriptions are shown below:
	
	Syntax
	
	  object.SelPrint(lHDC As Long, [vStartDoc])
	
	The SelPrint method syntax has these parts:
	
	  Part        Description
	  -----------------------------------------------------
	  object      An object expression that evaluates to a
	              RichTextbox control.
	
	  lHDC        Long. The device context of the device you
	              plan to use to print the contents of the
	              control.
	
	  vStartDoc   Boolean. Specifies the behavior of the
	              control regarding startdoc and enddoc printer
	              control operations, as shown in settings.
	
	Settings
	--------
	
	The settings for vStartDoc are:
	
	  Constant    Value      Description
	  ---------------------------------------------------------------
	  True        -1    (Default) The control retains its
	                    original behavior and sends startdoc
	                    and enddoc commands to the printer.
	
	  False       0     The control doesn't send startdoc and
	                    enddoc commands, but sends only
	                    startpage and endpage commands to the
	                    printer.
	
	Remarks:
	
	The argument was added to remedy situations when printers do not print with the
	default behavior. When the SelPrint method is invoked, both Visual Basic and the
	RichTextBox control send startdoc and enddoc commands to the printer resulting
	in a nested pair of startdoc/enddoc commands. Some printers respond only to the
	first pair of commands and thereby become disabled when the RichTextbox control
	sends the second pair. In that case, setting the vStartDoc argument to False
	prevents the second pair of commands from being sent.
	
	Visual Basic 5 Version of MSChart Control Available in Tools Directory
	----------------------------------------------------------------------
	
	For pre-release users of Visual Basic only:
	
	A Visual Basic 5.0x version of the MSChart control is now included with Visual
	Basic. If you need a Visual Basic 5 version of the Chart control, and you have
	installed the pre-release version of the MSChart control, please overwrite the
	pre-release version with the version contained in the Tools directory of the
	Visual Basic CD.
	
	Toolbar Control: Style Property Settings Changed
	------------------------------------------------
	
	The Style property settings for the Toolbar control have been changed. The help
	topic for the property lists tbrTransparent and tbrRight as possible settings,
	however these are not implemented in the current version. The actual possible
	settings and descriptions are shown below:
	
	  Constant      Value     Description
	  --------------------------------------------------------------
	  tbrStandard    0      (Default) Standard toolbar.
	
	  tbrFlat        1      Flat. The borders of a button
	                        dynamically appear when the cursor
	                        hovers over the button.
	
	Visual Basic Run-Time Error 720: Attempting to Add Anything Except a
	
	Control to Controls Collection Causes Run-Time Error
	----------------------------------------------------
	
	Attempting to add an object that is not a control to the Controls collection
	causes run-time error 720. You can only add Visual Basic intrinsic controls or
	ActiveX controls to the collection. To reproduce:
	
	1. Create a new Standard Exe. Form1 is created by default.
	
	2. Add the following code:
	
	        Private Sub Form_Load ()
	           Controls.Add "Excel.Application", "MyExcelApp")
	        End Sub
	
	3. Run the exe.
	
	Result: You get an error (720): Invalid class string.
	
	Hierarchical FlexGrid Control: Correcting Errors Binding a Recordset to the
	
	HFlexGrid
	---------
	
	If you receive the following error when trying to bind the Hierarchical FlexGrid
	to an ADO Recordset object, "DataSource settings may be incorrect", try changing
	some of the behavioral properties associated with the ADO Recordset Object or
	Command. For example, change the CursorLocation property to adUseNone or
	adUseClient.
	
	Hierarchical FlexGrid Control: How to Change the Font of Individual Bands
	-------------------------------------------------------------------------
	
	Since the same font object is used for the entire grid object, you must create a
	new font object to change the fonts of individual bands, rather than changing
	the font directly.
	
	For example, this way will not change the font for the individual band:
	
	     MSHFlexGrid1.FontBand(1).Name = "Arial"
	
	Since you are directly modifying the font object, this will change the fonts in
	all of the bands to Arial.
	
	To change an individual band, first create a new Font object, then assign that
	Font object to the FontBand property:
	
	    Dim ft As New StdFont
	    ft.Name = "Arial"
	    Set MSHFlexGrid1.FontBand(1) = ft
	
	This will change just the band's font to Arial.
	
	Hierarchical FlexGrid Control: Avoiding the display of duplicate headers
	------------------------------------------------------------------------
	
	By default, the Hierarchical FlexGrid control uses the first FixedRow in the
	Hierarchical FlexGrid as a set of headers (which means it displays the names of
	the fields bound to each column in this row). Since, by default, the HFlexGrid
	control displays one FixedRow, if you enable the display of headers on Band 0,
	it will appear as though the header is being duplicated twice. To avoid this,
	set the FixedRow property to 0, or clear out the text values in the first
	FixedRow using code.
	
	ADO Data Control: FetchProgress and FetchComplete Events Not Implemented
	------------------------------------------------------------------------
	
	Although the reference topic for the ADO Data Control includes links to the
	FetchProgress and FetchComplete events, the events are not implemented for the
	control.
	
	DataGrid: SizeMode and Size Properties Do Not Accept Value of 2
	
	(dbgNumberOfColumns)
	--------------------
	
	The reference topics for the Split object's SizeMode and Size properties refer to
	a non-existent property value of 2 (dbgNumberOfColumns). Please ignore this
	value.
	
	Controls: ImageList Control on Page Designer
	--------------------------------------------
	
	When using the ImageList control on a DHTML Page designer, images cannot be added
	at design time. If you try to use the following code in an uncompiled .dll
	project, you will get the run-time error: -2147418113 (8000ffff), "Method 'Add'
	of object images failed".
	
	    Private Sub DHTMLPage_Load()
	       ImageList1.ListImages.Add , , LoadPicture("C:\Winnt\winnt.bmp")
	    End Sub
	
	However, the code will work when the .dll project is compiled.
	
	MSComm Control: EOFEnable Property Doesn't Stop Data Input
	----------------------------------------------------------
	
	The EOFEnable property determines if the OnComm event occurs when an EOF
	character is detected. Contrary to the documentation for the property, however,
	input does not stop.
	
	Treeview Control: Node Object's Visible Property is Read-Only
	-------------------------------------------------------------
	
	The Visible property of the Treeview control's Node object is a read-only
	property. If the node is not visible, you can use the EnsureVisible method to
	make it visible, as shown in the example:
	
	    Private Sub Command1_Click()
	       If Not TreeView1.Nodes(10).Visible Then
	          TreeView1.Nodes(10).EnsureVisible
	       End If
	    End Sub
	
	SysInfo Control: Constants Not Supported
	----------------------------------------
	
	The reference topics for the following events have lists of constants that
	identify devices and device data.:
	
	- DeviceArrival Event
	
	- DeviceOtherEvent Event
	
	- DeviceQueryRemove Event
	
	- DeviceQueryRemoveFailed Event
	
	- DeviceRemoveComplete Event
	
	- DeviceRemovePending Event
	
	Contrary to the documentation, however, these constants are not supported by the
	events or the SysInfo control. The values associated with the constants listed
	in the help topics are valid, but the constant names are not.
	
	User Control: Binary Persistence of PropertyBag Data Causes Page Designer
	
	to Fail
	-------
	
	The PropertyBag saves data in binary format. Due to a known problem with binary
	persistence and the DHTML page designer, however, such data causes the page
	designer and Visual Basic to fail. See Page Designer: Binary Persistence Issue
	for more information.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q170164 : INFO: VB 6.0 Readme Part 1: Important Issues - Read First!
	
	  Q170163 : INFO: VB 6.0 Readme Part 2: Data Access/Databinding Issues
	
	  Q170161 : INFO: VB 6.0 Readme Part 4: Language Issues
	
	  Q170160 : INFO: VB 6.0 Readme Part 5: Samples Issues
	
	  Q190046 : INFO: VB 6.0 Readme Part 6: Wizard Issues
	
	  Q170158 : INFO: VB 6.0 Readme Part 7: Error Message Issues
	
	  Q189539 : INFO: VB 6.0 Readme Part 8: WebClass Designer Issues
	
	  Q190249 : INFO: VB 6.0 Readme Part 9: DHTML Page Designer Issues
	
	  Q170154 : INFO: VB 6.0 Readme Part 10: Extensibility Issues
	
	  Q170157 : INFO: VB 6.0 Readme Part 11: Miscellaneous Issues
	
	  Q170156 : INFO: VB 6.0 Readme Part 12: Transaction Server (MTS) Issues
	
	  Q191792 : INFO: VB 6.0 Readme Part 13: Dictionary Object
	
	  Q191791 : INFO: VB 6.0 Readme Part 14: Visual Component Manager
	
	  Q191790 : INFO: VB 6.0 Readme Part 15: Application Performance Explorer
	
	======================================================================
	Keywords          : kberrmsg kbreadme kbtophit kbActiveX kbCtrl kbDHTML kbPageDesigner kbVBp kbVBp600 kbVS600 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Issue type        : kbinfo
	
	=============================================================================
	
