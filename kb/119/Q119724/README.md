---
layout: page
title: "Q119724: ADT2: Creating Additional ADT Application Program Groups, Items"
permalink: /kb/119/Q119724/
---

## Q119724: ADT2: Creating Additional ADT Application Program Groups, Items

	Article: Q119724
	Product(s): Microsoft Access Distribution Kit
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	This article demonstrates a user-defined Access Basic function named
	CreateProgmanGroupIcons() that you can use to create additional Program Manager
	groups and icons for a custom application. For example, you can create icons to
	display informational text files, to run the Repair Database and Compact
	Database commands, and to control command-line switches.
	
	The CreateProgmanGroupIcons() function reads information from a table, runs
	dynamic data exchange (DDE) commands to create the Program Manager groups and
	icons, and then deletes the table.
	
	MORE INFORMATION
	================
	
	This article assumes that you are familiar with Access Basic and with creating
	Microsoft Access applications using the programming tools provided with
	Microsoft Access. For more information about Access Basic, please refer to the
	"Building Applications" manual.
	
	To create Program Manager groups and icons with Microsoft Access, follow these
	steps:
	
	1. Open the application's database. If you split the application into two
	  databases (one for program objects and one for data), open the database
	  containing the program objects.
	
	2. Create a table with the following structure:
	
	     Table: tbl_Progman
	     ------------------------
	     Field Name: mGroupName
	        Data Type: Text
	        Field Size: 30
	        Required: Yes
	     Field Name: mIconText
	        Data Type: Text
	        Field Size: 40
	        Required: Yes
	     Field Name: mIconFile
	        Data Type: Text
	        Field Size: 50
	     Field Name: mIconNum
	        Data Type: Text
	        Field Size: 5
	     Field Name: mCommandLine
	        Data Type: Text
	        Field Size: 120
	        Required: Yes
	     Field Name: mIconDefault
	        Data Type: Text
	        Field Size: 120
	
	  The following list describes the tbl_Progman table specifications:
	
	   - The mGroupName field specifies the name of the Program Manager group in
	     which the icons are created. This entry is required and should match the
	     entry in the Application Name text box in the Microsoft Access Developer's
	     Toolkit Setup Wizard so that the additional icons are created in the
	     application's program group.
	
	   - The mIconText field specifies the icon's title in the program group. This
	     entry is required.
	
	   - The mIconFile field specifies the icon's filename. If you do not specify a
	     filename, a default icon is used.
	
	   - The mIconNum field specifies the icon's index number in the file specified
	     in the mIconFile field. If you do not specify an index number, a default
	     icon is used.
	
	   - The mCommandLine field specifies the full command line required to run the
	     application. This entry is required.
	
	   - The mIconDefault field specifies the name of the default (or working)
	     directory. If you do not specify a default directory, the current
	     directory (containing the database) is used.
	
	3. View the tbl_Progman table in Datasheet view. From the list below, select the
	  icons you want to add, type the data for those icons in the tbl_Progman
	  table, and then close the tbl_Progman table.
	   - To display your own README.TXT file, type the following values:
	
	           mGroupName: NWIND Utilities
	           mIconText: My README.TXT
	           mCommandLine: NOTEPAD.EXE NWIND.TXT
	
	   - To repair and compact the application's database, type the following
	     values.
	
	  NOTE: In the following example, an underscore (_) at the end of a line is
	  used as a line-continuation character. Remove the underscore from the end of
	  the line when re-creating this example.
	
	           mGroupName: NWIND Utilities
	           mIconText: Repair/Compact NWIND
	           mIconFile: PROGMAN.EXE
	           mIconNum: 22
	           mCommandLine: MSARN200.EXE NWIND.MDB /ini myapp.ini /Repair / _
	                         Compact
	
	   - To create icons to run additional database command switches, type the
	     following values:
	
	           mGroupName: NWIND Utilities
	           mIconText: Solutions Database
	           mIconFile: PROGMAN.EXE
	           mIconNum: 16
	           mCommandLine: MSARN200.EXE SOLUTION.MDB /ini myapp.ini
	
	4. Create a module and type the following line in the Declarations section:
	
	        Option Explicit
	
	5. Type the following function:
	
	  NOTE: In the following sample code, an underscore (_) at the end of a line is
	  used as a line-continuation character. Remove the underscore from the end of
	  the line when re-creating this code in Access Basic.
	
	        '***************************************************
	        ' FUNCTION: CreateProgmanGroupIcons()
	        '
	        ' PURPOSE:
	        '   To create Program Manager groups and icons
	        '   when the application is run for the first time.
	        '***************************************************
	
	        Function CreateProgmanGroupIcons ()
	        Dim mydb As Database, rs As Recordset, Rcount As Integer, Xyz _
	           As Integer
	
	        Dim chan As Integer, Exe As String
	        Dim GroupName$, IconText$, IconFile$, IconNum$, CommandLine$, _
	           IconDefault$
	
	        On Error GoTo Creat_Errors
	        DoCmd Hourglass False
	
	        Set mydb = CurrentDB()
	        Set rs = mydb.OpenRecordset("tbl_Progman", DB_OPEN_DYNASET)
	        rs.MoveLast
	        Rcount = rs.recordcount
	        rs.MoveFirst
	
	        'Begin a DDE conversation with Program Manager.
	        chan = DDEInitiate("PROGMAN", "PROGMAN")
	
	        For Xyz = 1 To Rcount
	           GroupName$ = rs![mGroupName]
	           IconText$ = rs![mIconText]
	           IconFile$ = IIf(IsNull(rs![mIconFile]), "", rs![mIconFile])
	           IconNum$ = IIf(IsNull(rs![mIconNum]), "", rs![mIconNum])
	           CommandLine$ = CurDir & "\" & rs![mCommandLine]
	           IconDefault$ = IIf(IsNull(rs![mIconDefault]), CurDir, _
	              rs![mIconDefault])
	
	           'GroupName is a string that names the group to be created or
	           'activated.
	           'Run the CreateGroup DDE command to PROGMAN.
	           DDEExecute chan, "[CreateGroup(" & GroupName$ & ")]"
	
	           On Error Resume Next
	           'If duplicate icons exist, they will be replaced.
	           DDEExecute chan, "[ReplaceItem(" & IconText$ & ")]"
	
	           'Instruct Program Manager to create a new program icon in
	           'the active group specified by the variable GroupName.
	           'Run the AddItem DDE command to PROGMAN.
	           Exe = "[AddItem(" & CommandLine$ & ", " & IconText$ & ", " & _
	              IconFile$ & ", " & IconNum$ & ",,, " & IconDefault$ & ")]"
	           DDEExecute chan, Exe
	           rs.MoveNext
	           Next Xyz
	           rs.Close
	           mydb.tabledefs.Delete "tbl_Progman"
	           DDETerminate chan
	           DoCmd Hourglass False
	        Exit Function
	
	        Creat_Errors:
	           If Err = 3011 Then
	             Exit Function
	           Else
	              MsgBox Error$
	           End If
	
	        End Function
	
	6. Open the AutoExec macro in Design view (or if you do not have an AutoExec
	  macro, create one), and add the following action and argument:
	
	        Macro Name   Macro Actions
	        --------------------------
	        AutoExec     RunCode
	
	        AutoExec Actions
	        -------------------------------------------
	        RunCode
	
	           Function Name: CreateProgmanGroupIcons()
	
	7. Run the Setup Wizard to create the distribution disks for the custom
	  application. Use the disks to set up the application on another computer.
	
	  NOTE: The first time the application is run, the AutoExec macro runs the
	  CreateProgmanGroupIcons() function to create the Program Manager groups and
	  icons specified in the tbl_Progman table.
	
	NOTE: The Microsoft Access Developers Toolkit for Windows 95 Setup Wizard can
	provide Repair and Compact shortcuts for the desktop automatically. Select the
	Compact or Repair and Compact buttons on the "Add the shortcuts that you want"
	screen of the Setup Wizard. You can also create shortcuts to other files using
	custom command lines or a command line created by the wizard.
	
	REFERENCES
	==========
	
	For additional information about DDE and Program Manager, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q109394 ACC: How to Add an Icon to Program Manager Using DDE
	
	  Q104943 How to Manipulate Groups & Items in Program Manager Using DDE.
	
	
	Windows Software Development Kit "Guide to Programming," pages 19-22
	
	Additional query words: install
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbAccessSearch kbAccessDevTK200 kbZNotKeyword3
	Version           : 2.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
