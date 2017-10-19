---
layout: page
title: "Q282474: HOWTO: Print Using Custom Page Sizes on Windows NT/2000"
permalink: /kb/282/Q282474/
---

## Q282474: HOWTO: Print Using Custom Page Sizes on Windows NT/2000

	Article: Q282474
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbprint kbSample kbAPI kbPrinting kbSpooler kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSuppor
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows 95, Windows 98, and Windows Millennium Edition (Me) are
	flexible on custom, user-defined page sizes. However, on systems that are
	running Windows NT and Windows 2000, you must define all page sizes as a form
	before you can use them. This article describes how to print custom page sizes
	on Windows NT and Windows 2000 and includes a code sample that demonstrates how
	to add, select, and delete custom forms.
	
	NOTE: Because of the behavior of the Visual Basic 5.0 Printer object, the changes
	to the DEVMODE that are made by the call to ResetDC has no effect. Thus, the
	code sample in this article does not work from Visual Basic 5.0.
	
	This article is divided into the following sections:
	
	- DEVMODE Members That Define or Select Page Size
	- How to Programmatically Select a Form
	- Form Sources and Functions
	- Steps to Add a Local Print Driver for a Network Printer
	- Step-by-Step Example
	
	MORE INFORMATION
	================
	
	DEVMODE Members That Define or Select Page Size:
	
	Printer drivers store their default settings in a structure called the DEVMODE.
	When you define or select a page size, four members of this structure may be
	involved:
	
	- dmPaperSize
	- dmPaperLength
	- dmPaperWidth
	- dmFormName
	
	The dmPaperLength and dmPaperWidth members contain values on all operating
	systems, but they can only be used to select or define a size on systems that
	are running Windows 95, Windows 98, or Windows Me. The dmFormName member is only
	valid for systems that are running Windows NT or Windows 2000. The dmPaperSize
	member can be used on any 32-bit Windows operating system, as long as the value
	that is assigned to it corresponds to a size or form that is defined on that
	system.
	
	Thus, on systems that are running Windows 95, Windows 98, or Windows Me, you can
	define custom page sizes by height (length) and width or by a predefined paper
	size. Windows NT-based or Windows 2000-based systems only use defined forms for
	page sizes, which you can select in one of two ways: set dmFormName or assign a
	valid "constant" value to dmPaperSize.
	
	To use a particular paper size on Windows NT or Windows 2000, you must define a
	form for it. The Visual Basic Printer object has PageSize, Height, and Width
	properties that expose the dmPaperSize, dmPaperLength, and dmPaperWidth members
	of the DEVMODE. However, the Printer object does not expose a way to select a
	form by name, nor does it have a method to add a custom form at run time. We
	must use the Win32 application programming interface (API) to create a custom
	form and/or select a form by name.
	
	How to Programmatically Select a Form:
	
	This article uses the EnumForms basic process to list all forms that are
	supported for the current printer and to check the height and width of each
	form. If the specified size is found, it is selected. If it is not found, the
	code adds the form and then selects it.
	
	There are three ways to programmatically select a form:
	
	- Retrieve the printer's DEVMODE structure, set the dmFormName member, and use
	  the ResetDC function to set this form as the current form for the Device
	  Context (DC) of the printer. When this form is selected for the DC, it is
	  only selected for the calling process and does not change the driver's
	  default setting. This does not require any special permissions. This method
	  is preferred for applications that change a printer's settings.
	
	- Call the SetForm function to change the default form for the printer driver.
	  This method requires full access permissions to the driver. When the default
	  form is changed, it affects every application that uses this driver to print.
	  If this is a network printer, most users do not have the necessary
	  permissions to make this call.
	
	- Assign the system-defined value for the custom form to Printer.PaperSize.
	
	Only the first method is demonstrated in this article's sample code; the sample
	does not demonstrate the call to SetForm or the value assignment to
	Printer.PaperSize. The sample captures the system-assigned value of the new
	custom form by returning the value of its ordinal position in the list that
	EnumForms returns. Note that this only works for custom forms. Predefined forms
	have constant values assigned to them that do not correspond to their ordinal
	position in this list.
	
	When you use the AddForm function to add your custom form, the form is given its
	own number, if available, which then remains consistent across all printers that
	use the form. In this case, the form is defined and given a "constant" value for
	the current system. You can then assign this value to Printer.PaperSize to
	select it. However, because the number assignment is simply one more than the
	number of forms that is listed for the current printer when the form was added,
	this number may not be available because a predefined form is already using that
	number. Therefore, it is not recommended that you use this value to select a
	form, and this value is not demonstrated here. If you use this number
	assignment, and the value for it is unavailable, it will either select the wrong
	form or raise run-time error 380: "Invalid Property Value."
	
	Form Sources and Functions:
	
	Most forms are defined by the operating system and are available to all local
	printers. However, forms for network printers are defined on the printer server.
	Some forms may be defined specifically for a given printer driver and only
	appear in the list for that driver. Another source for forms is custom-defined
	or user-defined forms, which can be created manually or through code and are
	available to all local printers on the system. Both printer-specific and
	user-defined forms are stored in the registry.
	
	The sample in this article uses a few function calls that are related to forms.
	Briefly, the key functions are as follows:
	
	+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Function   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | 
	+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| EnumForms  | Returns information about all of the forms that are supported for the current printer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | 
	+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| AddForm    | Adds a custom form to the system. The data on this form is stored in the registry. Thus, custom forms are available for all printers, not just the printer that was current when the form was added. The numeric value that the system assigns to this form is simply one number higher than the number of forms that EnumForms returns for the current printer. You must have full rights to the driver to call this function. If you cannot add a form manually, this function call also fails for you. For this reason, you usually cannot use this function on network printers. | 
	+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| DeleteForm | Removes a custom form. However, this function does not delete the standard forms that the operating system defines and returns error code 87 if this is attempted. This function also requires the same rights as AddForm.                                                                                                                                                                                                                                                                                                                                                           | 
	+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
	
	Although the sample does not use the following functions, it does include the
	Declares for these functions:
	
	+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| Function | Description                                                                                                                                        | 
	+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| GetForm  | Retrieves information about a specific form.                                                                                                       | 
	+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| SetForm  | Sets the default form information for the specified printer. This function requires full rights, just as changing any printer driver setting does. | 
	+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
	
	It must be emphasized that some of these functions require Full Control
	permissions on the printer. Therefore, the SetForm, AddForm, and DeleteForm
	functions almost never work for printers that are installed as "network
	printers." This is because the drivers for network printers are not installed
	locally but reside on the printer server, and your User account is unlikely to
	have Administrator rights on the printer server. This differs from systems that
	are running Windows 95, Windows 98, or Windows Me, in which all printer drivers
	(even network printers) are always installed locally. However, you can install
	network printers as local printers in Windows NT or Windows 2000 and set the
	Port to the printer queue. Then you can use these functions to make changes
	without affecting other users who share the printer.
	
	Steps to Add a Local Printer Driver for a Network Printer:
	
	1. On the Start menu, point to Settings, and then click Printers. Double-click
	  Add Printer to start the Add Printer Wizard.
	
	2. When prompted, make sure that you click Local printer or My Computer and NOT
	  Network printer. Although you will connect to a network printer, you want to
	  use a driver on My Computer. Click Next to continue.
	
	3. On Windows NT, click Add Port. On Windows 2000, click Create a new port.
	
	4. In the drop-down list box, click Local Port. On Windows NT, click New Port.
	  On Windows 2000, click Next, and you are prompted for a Port Name.
	
	5. Type the location of the printer on the network. For example:
	
	  "\\printserver\printername" (without the quotation marks)
	
	  where you use the exact path name to the printer.
	
	6. Click OK, and complete the wizard.
	
	If you change the printer properties for the active printer, you still affect all
	applications that use that printer, but only for the local system.
	
	IMPORTANT When you use custom page sizes, the behavior differs between Laser or
	Ink Jet printers and Dot Matrix or impact printers. Obviously, no printer
	accepts a page size that is wider than it can physically accommodate. But
	printers that use continuous feed paper can be flexible on page sizes because
	they print one line at a time. Alternately, Laser and Ink Jet printers print one
	page at a time. Thus, for example, when you print to a Dot Matrix printer (which
	uses continuous feed paper), you can easily see the page length during a form
	feed because the printer advances to the place where it expects the top of the
	next page to start, regardless of the physical size of the paper that it is
	using. On Laser and Ink Jet printers, a form feed always ejects a full physical
	page regardless of the page size it expects. Also, on most Laser printers, the
	display reads "Load Custom" (or similar) when you ask the printer to print on a
	user-defined page size.
	
	Step-by-Step Example:
	
	1. Set a local printer as the default printer. To do this, follow these steps:
	
	  a. On the Start menu, point to Settings, and then click Printers.
	
	  b. Right-click the icon for a local printer, and then click "Set as default".
	
	2. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	3. Add three CommandButtons and a ListBox control to Form1.
	
	4. Paste the following code into the module of Form1:
	
	  Option Explicit
	
	  Private Sub Command1_Click()
	  Dim FormName As String
	
	  FormName = "MyCustomForm"   ' Use special, user-defined form.
	  UseForm FormName
	  End Sub
	
	  Private Sub Command2_Click()
	  Dim FormName As String
	
	  ' Get FormName from the ListBox.
	  On Error GoTo ListBoxERR    ' Trap for no selection.
	  FormName = Mid(List1.Text, 1, InStr(1, List1.Text, " -") - 1)
	  On Error GoTo 0             ' Turn off Error trap.
	
	  UseForm FormName
	
	  Exit Sub
	  ListBoxERR:
	  MsgBox "Select a printer from the ListBox before using this option.", _
	     vbExclamation
	  End Sub
	
	  Private Sub Command3_Click()
	  Dim RetVal As Long
	  Dim PrinterHandle As Long   ' Handle to printer
	  Dim PrinterName As String
	  Dim FormName As String
	  Dim Continue As Long
	
	  ' Delete form that is selected in ListBox.
	  PrinterName = Printer.DeviceName  ' Current printer
	  If OpenPrinter(PrinterName, PrinterHandle, 0&) Then
	
	      On Error GoTo ListBoxERR    ' Trap for no selection.
	      FormName = Mid(List1.Text, 1, InStr(1, List1.Text, " -") - 1)
	      On Error GoTo 0             ' Turn off Error trap.
	      
	      Continue = MsgBox("Are you sure you want to permanently remove " & _
	                 FormName & " from " & PrinterName & "?", vbYesNo)
	      If Continue = vbYes Then
	          RetVal = DeleteForm(PrinterHandle, FormName & Chr(0))
	          If RetVal <> 0 Then ' DeleteForm succeeded.
	              List1.Clear     ' Reflect the deletion in the ListBox.
	              Form_Load       ' Rebuild the list.
	              MsgBox FormName & " deleted!", vbInformation, "Success!"
	          Else
	              MsgBox FormName & " not deleted!" & vbCrLf & vbCrLf & _
	                 "Error code: " & Err.LastDllError, vbInformation, "Failure!"
	          End If
	      End If
	      ClosePrinter (PrinterHandle)
	  End If
	
	  Exit Sub
	  ListBoxERR:
	  MsgBox "Select a printer from the ListBox before using this option.", _
	     vbExclamation
	  ClosePrinter (PrinterHandle)
	  End Sub
	
	  Private Sub Form_Load()
	  Dim NumForms As Long, I As Long
	  Dim FI1 As FORM_INFO_1
	  Dim aFI1() As FORM_INFO_1           ' Working FI1 array
	  Dim Temp() As Byte                  ' Temp FI1 array
	  Dim BytesNeeded As Long
	  Dim PrinterName As String           ' Current printer
	  Dim PrinterHandle As Long           ' Handle to printer
	  Dim FormItem As String              ' For ListBox
	  Dim RetVal As Long
	  Dim FormSize As SIZEL               ' Size of desired form
	
	  PrinterName = Printer.DeviceName    ' Current printer
	  If OpenPrinter(PrinterName, PrinterHandle, 0&) Then
	      With FormSize   ' Desired page size
	          .cx = 214000
	          .cy = 216000
	      End With
	      ReDim aFI1(1)
	      RetVal = EnumForms(PrinterHandle, 1, aFI1(0), 0&, BytesNeeded, _
	               NumForms)
	      ReDim Temp(BytesNeeded)
	      ReDim aFI1(BytesNeeded / Len(FI1))
	      RetVal = EnumForms(PrinterHandle, 1, Temp(0), BytesNeeded, _
	               BytesNeeded, NumForms)
	      Call CopyMemory(aFI1(0), Temp(0), BytesNeeded)
	      For I = 0 To NumForms - 1
	          With aFI1(I)
	              ' List name and size including the count (index).
	              FormItem = PtrCtoVbString(.pName) & " - " & .Size.cx / 1000 & _
	                 " mm X " & .Size.cy / 1000 & " mm   (" & I + 1 & ")"
	              List1.AddItem FormItem
	          End With
	      Next I
	      ClosePrinter (PrinterHandle)
	  End If
	  End Sub
	
	  Private Sub UseForm(FormName As String)
	  Dim RetVal As Integer
	
	  RetVal = SelectForm(FormName, Me.hwnd)
	  Select Case RetVal
	      Case FORM_NOT_SELECTED   ' 0
	          ' Selection failed!
	          MsgBox "Unable to retrieve From name", vbExclamation, _
	             "Operation halted!"
	      Case FORM_SELECTED   ' 1
	          ' Selection succeeded!
	          PrintTest     ' Comment this line to avoid printing
	      Case FORM_ADDED   ' 2
	          ' Form added and selected.
	          List1.Clear   ' Reflect the addition in the ListBox
	          Form_Load     ' by rebuilding the list.
	  End Select
	  End Sub
	
	5. From the Project menu, add a new Module, Module1.
	
	6. Paste the following code into Module1:
	
	  Option Explicit
	
	  Public Declare Function EnumForms Lib "winspool.drv" Alias "EnumFormsA" _
	      (ByVal hPrinter As Long, ByVal Level As Long, ByRef pForm As Any, _
	      ByVal cbBuf As Long, ByRef pcbNeeded As Long, _
	      ByRef pcReturned As Long) As Long
	
	  Public Declare Function AddForm Lib "winspool.drv" Alias "AddFormA" _
	      (ByVal hPrinter As Long, ByVal Level As Long, pForm As Byte) As Long
	
	  Public Declare Function DeleteForm Lib "winspool.drv" Alias "DeleteFormA" _
	      (ByVal hPrinter As Long, ByVal pFormName As String) As Long
	      
	  Public Declare Function OpenPrinter Lib "winspool.drv" _
	      Alias "OpenPrinterA" (ByVal pPrinterName As String, _
	      phPrinter As Long, ByVal pDefault As Long) As Long
	
	  Public Declare Function ClosePrinter Lib "winspool.drv" _
	      (ByVal hPrinter As Long) As Long
	
	  Public Declare Function DocumentProperties Lib "winspool.drv" _
	      Alias "DocumentPropertiesA" (ByVal hwnd As Long, _
	      ByVal hPrinter As Long, ByVal pDeviceName As String, _
	      pDevModeOutput As Any, pDevModeInput As Any, ByVal fMode As Long) _
	      As Long
	
	  Public Declare Function ResetDC Lib "gdi32" Alias "ResetDCA" _
	      (ByVal hdc As Long, lpInitData As Any) As Long
	
	  Public Declare Sub CopyMemory Lib "KERNEL32" Alias "RtlMoveMemory" _
	      (hpvDest As Any, hpvSource As Any, ByVal cbCopy As Long)
	
	  Public Declare Function lstrcpy Lib "KERNEL32" Alias "lstrcpyA" _
	      (ByVal lpString1 As String, ByRef lpString2 As Long) As Long
	      
	  ' Optional functions not used in this sample, but may be useful.
	  Public Declare Function GetForm Lib "winspool.drv" Alias "GetFormA" _
	      (ByVal hPrinter As Long, ByVal pFormName As String, _
	      ByVal Level As Long, pForm As Byte, ByVal cbBuf As Long, _
	      pcbNeeded As Long) As Long
	      
	  Public Declare Function SetForm Lib "winspool.drv" Alias "SetFormA" _
	      (ByVal hPrinter As Long, ByVal pFormName As String, _
	      ByVal Level As Long, pForm As Byte) As Long
	
	  ' Constants for DEVMODE
	  Public Const CCHFORMNAME = 32
	  Public Const CCHDEVICENAME = 32
	  Public Const DM_FORMNAME As Long = &H10000
	  Public Const DM_ORIENTATION = &H1&
	
	  ' Constants for PRINTER_DEFAULTS.DesiredAccess
	  Public Const PRINTER_ACCESS_ADMINISTER = &H4
	  Public Const PRINTER_ACCESS_USE = &H8
	  Public Const STANDARD_RIGHTS_REQUIRED = &HF0000
	  Public Const PRINTER_ALL_ACCESS = (STANDARD_RIGHTS_REQUIRED Or _
	    PRINTER_ACCESS_ADMINISTER Or PRINTER_ACCESS_USE)
	    
	  ' Constants for DocumentProperties() call
	  Public Const DM_MODIFY = 8
	  Public Const DM_IN_BUFFER = DM_MODIFY
	  Public Const DM_COPY = 2
	  Public Const DM_OUT_BUFFER = DM_COPY
	
	  ' Custom constants for this sample's SelectForm function
	  Public Const FORM_NOT_SELECTED = 0
	  Public Const FORM_SELECTED = 1
	  Public Const FORM_ADDED = 2
	
	  Public Type RECTL
	          Left As Long
	          Top As Long
	          Right As Long
	          Bottom As Long
	  End Type
	
	  Public Type SIZEL
	          cx As Long
	          cy As Long
	  End Type
	
	  Public Type SECURITY_DESCRIPTOR
	          Revision As Byte
	          Sbz1 As Byte
	          Control As Long
	          Owner As Long
	          Group As Long
	          Sacl As Long  ' ACL
	          Dacl As Long  ' ACL
	  End Type
	
	  ' The two definitions for FORM_INFO_1 make the coding easier.
	  Public Type FORM_INFO_1
	          Flags As Long
	          pName As Long   ' String
	          Size As SIZEL
	          ImageableArea As RECTL
	  End Type
	
	  Public Type sFORM_INFO_1
	          Flags As Long
	          pName As String
	          Size As SIZEL
	          ImageableArea As RECTL
	  End Type
	
	  Public Type DEVMODE
	          dmDeviceName As String * CCHDEVICENAME
	          dmSpecVersion As Integer
	          dmDriverVersion As Integer
	          dmSize As Integer
	          dmDriverExtra As Integer
	          dmFields As Long
	          dmOrientation As Integer
	          dmPaperSize As Integer
	          dmPaperLength As Integer
	          dmPaperWidth As Integer
	          dmScale As Integer
	          dmCopies As Integer
	          dmDefaultSource As Integer
	          dmPrintQuality As Integer
	          dmColor As Integer
	          dmDuplex As Integer
	          dmYResolution As Integer
	          dmTTOption As Integer
	          dmCollate As Integer
	          dmFormName As String * CCHFORMNAME
	          dmUnusedPadding As Integer
	          dmBitsPerPel As Long
	          dmPelsWidth As Long
	          dmPelsHeight As Long
	          dmDisplayFlags As Long
	          dmDisplayFrequency As Long
	  End Type
	
	  Public Type PRINTER_DEFAULTS
	          pDatatype As String
	          pDevMode As Long    ' DEVMODE
	          DesiredAccess As Long
	  End Type
	
	  Public Type PRINTER_INFO_2
	          pServerName As String
	          pPrinterName As String
	          pShareName As String
	          pPortName As String
	          pDriverName As String
	          pComment As String
	          pLocation As String
	          pDevMode As DEVMODE
	          pSepFile As String
	          pPrintProcessor As String
	          pDatatype As String
	          pParameters As String
	          pSecurityDescriptor As SECURITY_DESCRIPTOR
	          Attributes As Long
	          Priority As Long
	          DefaultPriority As Long
	          StartTime As Long
	          UntilTime As Long
	          Status As Long
	          cJobs As Long
	          AveragePPM As Long
	  End Type
	
	  Public Function GetFormName(ByVal PrinterHandle As Long, _
	                            FormSize As SIZEL, FormName As String) As Integer
	  Dim NumForms As Long, I As Long
	  Dim FI1 As FORM_INFO_1
	  Dim aFI1() As FORM_INFO_1           ' Working FI1 array
	  Dim Temp() As Byte                  ' Temp FI1 array
	  Dim FormIndex As Integer
	  Dim BytesNeeded As Long
	  Dim RetVal As Long
	
	  FormName = vbNullString
	  FormIndex = 0
	  ReDim aFI1(1)
	  ' First call retrieves the BytesNeeded.
	  RetVal = EnumForms(PrinterHandle, 1, aFI1(0), 0&, BytesNeeded, NumForms)
	  ReDim Temp(BytesNeeded)
	  ReDim aFI1(BytesNeeded / Len(FI1))
	  ' Second call actually enumerates the supported forms.
	  RetVal = EnumForms(PrinterHandle, 1, Temp(0), BytesNeeded, BytesNeeded, _
	           NumForms)
	  Call CopyMemory(aFI1(0), Temp(0), BytesNeeded)
	  For I = 0 To NumForms - 1
	      With aFI1(I)
	          If .Size.cx = FormSize.cx And .Size.cy = FormSize.cy Then
	             ' Found the desired form
	              FormName = PtrCtoVbString(.pName)
	              FormIndex = I + 1
	              Exit For
	          End If
	      End With
	  Next I
	  GetFormName = FormIndex  ' Returns non-zero when form is found.
	  End Function
	
	  Public Function AddNewForm(PrinterHandle As Long, FormSize As SIZEL, _
	                             FormName As String) As String
	  Dim FI1 As sFORM_INFO_1
	  Dim aFI1() As Byte
	  Dim RetVal As Long
	
	  With FI1
	      .Flags = 0
	      .pName = FormName
	      With .Size
	          .cx = FormSize.cx
	          .cy = FormSize.cy
	      End With
	      With .ImageableArea
	          .Left = 0
	          .Top = 0
	          .Right = FI1.Size.cx
	          .Bottom = FI1.Size.cy
	      End With
	  End With
	  ReDim aFI1(Len(FI1))
	  Call CopyMemory(aFI1(0), FI1, Len(FI1))
	  RetVal = AddForm(PrinterHandle, 1, aFI1(0))
	  If RetVal = 0 Then
	      If Err.LastDllError = 5 Then
	          MsgBox "You do not have permissions to add a form to " & _
	             Printer.DeviceName, vbExclamation, "Access Denied!"
	      Else
	          MsgBox "Error: " & Err.LastDllError, "Error Adding Form"
	      End If
	      AddNewForm = "none"
	  Else
	      AddNewForm = FI1.pName
	  End If
	  End Function
	
	  Public Function PtrCtoVbString(ByVal Add As Long) As String
	  Dim sTemp As String * 512, x As Long
	
	  x = lstrcpy(sTemp, ByVal Add)
	  If (InStr(1, sTemp, Chr(0)) = 0) Then
	       PtrCtoVbString = ""
	  Else
	       PtrCtoVbString = Left(sTemp, InStr(1, sTemp, Chr(0)) - 1)
	  End If
	  End Function
	
	  Public Function SelectForm(FormName As String, ByVal MyhWnd As Long) _
	      As Integer
	  Dim nSize As Long           ' Size of DEVMODE
	  Dim pDevMode As DEVMODE
	  Dim PrinterHandle As Long   ' Handle to printer
	  Dim hPrtDC As Long          ' Handle to Printer DC
	  Dim PrinterName As String
	  Dim aDevMode() As Byte      ' Working DEVMODE
	  Dim FormSize As SIZEL
	
	  PrinterName = Printer.DeviceName  ' Current printer
	  hPrtDC = Printer.hdc              ' hDC for current Printer
	  SelectForm = FORM_NOT_SELECTED    ' Set for failure unless reset in code.
	
	  ' Get a handle to the printer.
	  If OpenPrinter(PrinterName, PrinterHandle, 0&) Then
	      ' Retrieve the size of the DEVMODE.
	      nSize = DocumentProperties(MyhWnd, PrinterHandle, PrinterName, 0&, _
	              0&, 0&)
	      ' Reserve memory for the actual size of the DEVMODE.
	      ReDim aDevMode(1 To nSize)
	
	      ' Fill the DEVMODE from the printer.
	      nSize = DocumentProperties(MyhWnd, PrinterHandle, PrinterName, _
	              aDevMode(1), 0&, DM_OUT_BUFFER)
	      ' Copy the Public (predefined) portion of the DEVMODE.
	      Call CopyMemory(pDevMode, aDevMode(1), Len(pDevMode))
	      
	      ' If FormName is "MyCustomForm", we must make sure it exists
	      ' before using it. Otherwise, it came from our EnumForms list,
	      ' and we do not need to check first. Note that we could have
	      ' passed in a Flag instead of checking for a literal name.
	      If FormName = "MyCustomForm" Then
	          ' Use form "MyCustomForm", adding it if necessary.
	          ' Set the desired size of the form needed.
	          With FormSize   ' Given in thousandths of millimeters
	              .cx = 214000   ' width
	              .cy = 216000   ' height
	          End With
	          If GetFormName(PrinterHandle, FormSize, FormName) = 0 Then
	              ' Form not found - Either of the next 2 lines will work.
	              'FormName = AddNewForm(PrinterHandle, FormSize, "MyCustomForm")
	              AddNewForm PrinterHandle, FormSize, "MyCustomForm"
	              If GetFormName(PrinterHandle, FormSize, FormName) = 0 Then
	                  ClosePrinter (PrinterHandle)
	                  SelectForm = FORM_NOT_SELECTED   ' Selection Failed!
	                  Exit Function
	              Else
	                  SelectForm = FORM_ADDED  ' Form Added, Selection succeeded!
	              End If
	          End If
	      End If
	      
	      ' Change the appropriate member in the DevMode.
	      ' In this case, you want to change the form name.
	      pDevMode.dmFormName = FormName & Chr(0)  ' Must be NULL terminated!
	      ' Set the dmFields bit flag to indicate what you are changing.
	      pDevMode.dmFields = DM_FORMNAME
	
	      ' Copy your changes back, then update DEVMODE.
	      Call CopyMemory(aDevMode(1), pDevMode, Len(pDevMode))
	      nSize = DocumentProperties(MyhWnd, PrinterHandle, PrinterName, _
	              aDevMode(1), aDevMode(1), DM_IN_BUFFER Or DM_OUT_BUFFER)
	
	      nSize = ResetDC(hPrtDC, aDevMode(1))   ' Reset the DEVMODE for the DC.
	
	      ' Close the handle when you are finished with it.
	      ClosePrinter (PrinterHandle)
	      ' Selection Succeeded! But was Form Added?
	      If SelectForm <> FORM_ADDED Then SelectForm = FORM_SELECTED  
	  Else
	      SelectForm = FORM_NOT_SELECTED   ' Selection Failed!
	  End If
	  End Function
	
	  Public Sub PrintTest()
	      ' Print two test pages to confirm the page size.
	      Printer.Print "Top of Page 1."
	      Printer.NewPage
	      ' Spacing between lines should reflect the chosen page height.
	      Printer.Print "Top of Page 2. - Check the page Height (Length.)"
	      Printer.EndDoc
	      MsgBox "Check Printer " & Printer.DeviceName, vbInformation, "Done!"
	  End Sub
	
	7. Run the project. The ListBox shows all of the forms that the current printer
	  supports.
	
	8. Click Command1. This adds "MyCustomForm - 214 mm X 216 mm (xxx)" to the end
	  of the list, where "xxx" is the number that is assigned to the new form.
	
	9. Click a form in the ListBox, and then click Command2. This prints a test page
	  to the current printer using the selected form.
	
	10. Click the new custom form in the ListBox, and then click Command3. You are
	  prompted to confirm the deletion of the form. If you click Yes, it removes
	  the custom form. If you try this with a predefined form, it raises error 87
	  because only custom forms can be deleted.
	
	REFERENCES
	==========
	
	For more information on the functions and types that are used in this article,
	see the MSDN Library CD or the Win32 SDK Programmer's Guide.
	
	For additional information on forms, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q157172 How to Create Custom Forms in Windows NT 4.0 and Windows 2000
	
	
	Additional query words: user defined
	
	======================================================================
	Keywords          : kbprint kbSample kbAPI kbPrinting kbSpooler kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	
