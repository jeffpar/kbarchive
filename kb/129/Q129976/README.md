---
layout: page
title: "Q129976: INFO: Differences Between FoxPro and Visual FoxPro"
permalink: /kb/129/Q129976/
---

## Q129976: INFO: Differences Between FoxPro and Visual FoxPro

{% raw %}

	Article: Q129976
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbvfp300 kbvfp500 kbvfp600
	Last Modified: 30-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	FoxPro Programmers moving to Visual FoxPro from earlier versions of FoxPro will
	find that many things have changed dramatically, including terminology, the
	programming tools, and even the programming style.
	
	This article is a comprehensive reference that lists the differences between
	Visual FoxPro and earlier versions of FoxPro to help make the transition
	easier.
	
	This article discusses major changes in Visual FoxPro in the following areas:
	
	 Terminology              Interface      Tools
	 Language                 Keystrokes     Screens
	 Tables and Databases     Menus          Reports and Labels
	
	Most of this information is also available in separate, smaller Help topics in
	the Visual FoxPro Help file.
	
	MORE INFORMATION
	================
	
	Terminology Differences
	-----------------------
	
	Visual FoxPro redefines some FoxPro version 2.6 terms. For more information on
	new terms, please see the Glossary in the Visual FoxPro Help file.
	
	FoxPro Version 2.6 Term   Visual FoxPro Term
	---------------------------------------------
	@ ... GET field           text box control
	
	Blanks or empty           Null values
	fields or variables
	
	Browse (in a Form)        Grid control
	
	Buffer                    Record and table buffers and transactions.
	                         (See "Buffering Access to Data" and "Using
	                         Transactions" in the Visual FoxPro Help file.)
	
	Code snippets             Properties, methods, and event code.
	                         (See "Setting Properties at Design Time" and
	                         "Assigning Method and Event Code" in the Visual
	                         FoxPro Help file.)
	
	Control                   Control
	
	Database                  Database
	
	Edit region               EditBox control
	
	Long names                Long names.
	                         (See "Visual FoxPro Naming Rules" in the Visual
	                         FoxPro Help file.)
	
	Object                    Object
	
	Popup                     ComboBox control
	
	Power tools               Visual designers and toolboxs.
	                         (See "Using Designers" and "Using Toolbars" in
	                         the Visual FoxPro Help file.)
	
	PushButton                CommandButton control
	
	Radio button              OptionButton control
	
	Screen                    Form
	
	Screen picture            Image control
	
	Screen set                Form set
	
	Table                     Table
	
	Text                      Label control
	
	Language Differences
	--------------------
	
	Although Visual FoxPro includes new commands as well as FoxPro version 2.6
	commands for backward compatibility, many FoxPro version 2.6 commands and
	functions have enhanced or modified functionality in Visual FoxPro.
	
	Visual FoxPro allows long names for windows, objects, tables, and variables. You
	can use up to 254 characters, except for field names in free tables and index
	tags. (For details, please see "Visual FoxPro Naming Rules" in the Visual FoxPro
	Help file.)
	
	FoxPro 2.6 clause, command,       Visual FoxPro command, function,
	function, or feature              property, event, or method
	---------------------------------------------------------------------
	@ ... SAY                         Left Property, Top property
	
	@ ... SAY PICTURE                 Image, OLE Bound
	
	BORDER                            BorderStyle property
	
	MOVE WINDOW CENTER                AutoCenter property
	
	Color                             ColorSourceForeColor, BackColor property
	
	Color scheme                      ForeColor property, BackColor property,
	                                 ColorScheme property
	
	Date data type                    Date Data Type and Date Time Type
	
	DBCONNECT                         SQLCONNECT( ) Function
	
	DBEXEC                            SQLEXEC( ) Function
	
	DEACTIVATE MENU,                  Deactivate Event
	DEACTIVATE POPUP,
	DEACTIVATE WINDOW
	
	@ ... GET DEFAULT                 Default property
	
	DEFINE WINDOW CLOSE               Closable property
	
	DEFINE WINDOW FLOAT               Movable property
	
	DEFINE WINDOW HALFHEIGHT          HalfHeightCaption property
	
	DEFINE WINDOW ICON FILE           Icon property
	
	EMPTY( ), BLANK( ) to check       ISNULL( ) to check for null values
	for non-existent data             representing unknown or non-existent data
	
	Enable, Disable                   Enabled property
	
	Font (Text Menu)                  FontName property
	
	Font size (Font dialog)           FontSize property
	
	Font style bold (Font dialog)     FontBold property
	
	Font style italic (Font dialog)   FontItalic property
	
	@ ... SAY FUNCTION,               Format property
	any @ ... GET FUNCTION
	
	Height                            Height property
	
	Horizontal position               Left property
	(Screen Layout dialog)
	
	@ ... GET MESSAGE cMessageText    StatusBarText property
	
	MODIFY SCREEN                     MODIFY FORM command
	
	MODIFY STRUCTURE                  TABLE Designer
	
	Numeric data type                 Numeric data type plus Float field type,
	                                 Integer field type, Double field type,
	                                 and Currency data type
	
	Picture                           InputMask property
	
	READ ACTIVATE                     ReadActivate event
	
	READ CYCLE                        ReadCycle property
	
	READ DEACTIVATE                   ReadDeactivate event
	
	READ LOCK                         ReadLock property
	
	READ NOMOUSE                      ReadMouse property
	
	READ SAVE                         ReadSave property
	
	READ SHOW                         ReadShow event
	
	READ TIMEOUT                      ReadTimeout property
	
	READ VALID                        ReadValid event
	
	READ WHEN                         ReadWhen event
	
	Screen Name                       Name
	
	SET NOCPTRANS                     (See "Preventing Translation of Data in
	                                 Character or Memo Fields" in the Visual
	                                 FoxPro Help file)
	
	SHOW GET, SHOW GETS               Refresh method
	
	Size (Screen Layout dialog)       Height, Width properties
	
	Style (Font dialog)               FontBold, FontItalic, FontUnderline
	                                 properties, FontShadow property,
	                                 FontOutline property, FontStrikeThru
	                                 property
	
	Terminate on selection            TerminateRead property
	(Screen Builder)
	
	Title (Screen Builder)            Caption property
	
	Valid (Screen Builder)            Click event, DblClick event, LostFocus
	                                 event, Valid event
	
	Valid Error                       ErrorMessage
	
	Vertical position                 Top property
	(Screen Layout dialog)
	
	When (Screen Builder)             GotFocus event, When event
	
	Width (Screen Builder)            Width property
	
	Table and Database Differences
	------------------------------
	
	Visual FoxPro distinguishes between tables and databases. Although FoxPro version
	2.6 tables are fully functional in Visual FoxPro, if you modify the table
	structure of FoxPro tables, they are saved as Visual FoxPro tables.
	
	FoxPro 2.6 feature                Visual FoxPro feature
	or functionality                  or functionality
	----------------------------------------------------------------------
	Character field with NOCPTRANS    Character (BINARY) field type.
	characteristic                    (See "Data and Field Types"
	                                 in the Visual FoxPro Help file.)
	
	General field size                Now 4 bytes. (See "General Field Type" in
	                                 the Visual FoxPro Help file.)
	
	Memo field size                   Now 4 bytes. (See "Memo Field Type" in
	                                 the Visual FoxPro Help file.)
	
	Memo field with NOCPTRANS         Memo (BINARY) field type. (See "Data and
	characteristic                    Field Types" in the Visual FoxPro Help
	                                 file.)
	
	Numeric fields                    Currency data type, Double field type,
	                                 Float field type, Integer field type, or
	                                 Numeric data type.
	
	OLE data in a General field       OLE Bound Control.
	
	Visual FoxPro tables can accept null values. To prevent errors generated by
	attempts to store null values to FoxPro version 2.6 variables or to Visual
	FoxPro controls, initialize variables or arrays. To prevent users from
	attempting to store null values to tables, you can disable the NULL-entry key
	combination by using this statement:
	
	  
	
	     ON KEY LABEL CTRL+0 *
	
	The structures of Visual FoxPro screen (.SCX), report (.FRX), and label (.LBX)
	files differ from the structures of FoxPro 2.6 files. For details on the
	structure of Visual FoxPro table files created in the Form, Report, and Label
	Designers, please see "Table Structures of Table Files" in the Visual FoxPro
	Help file. For details on changes made to converted and saved record files,
	please see "Checking Converted FoxPro 2.6 Reports and Labels" in the Visual
	FoxPro Help file.
	
	Interface Differences
	---------------------
	
	In addition to the changes in the Visual FoxPro interface, such as keystroke,
	menu, and tool differences, you might want to know about changes to screens,
	reports, and labels for your own application interfaces.
	
	Keystroke Differences
	---------------------
	
	Visual FoxPro redefines some FoxPro version 2.6 navigation key combinations.
	
	FoxPro 2.6 Key    Visual FoxPro Key     Definition or
	Combination       Combination           Difference
	----------------------------------------------------------------------
	                 Ctrl + N              Create a new file
	Ctrl + N          Ctrl + Y              Add a record to a Browse window
	Ctrl + O          Ctrl + E              DO program in edit window
	
	You can insert null values into null-enabled fields by pressing CTRL+0. If you
	don't want your users to store null values to variables, disable this key
	combination with the following command:
	
	  
	
	    ON KEY LABEL Ctrl+0 *
	
	In Visual FoxPro, you press the TAB key to navigate between controls, so you
	cannot tab through options in a list box. Use the arrow keys instead.
	
	Menu Differences
	----------------
	
	Visual FoxPro displays only menus with active options. Some menu items have moved
	to different locations in Visual FoxPro. For more information on Visual FoxPro
	menus, please see "System Menu Names" in the Visual FoxPro Help file.
	
	FoxPro 2.6 menu command          Visual FoxPro menu command
	-------------------------------------------------------------------
	1 1/2 Space (Text Menu)          1 1/2 Space (Format Menu)
	
	Append (Record Menu)             Append Records (Table Menu)
	
	Append From (Database Menu)      Import (File Menu)
	
	Beautify (Program Menu)          Documenting Wizard (Tools Menu)
	                                professional Edition only
	
	FoxDoc (Program Menu)            Documenting Wizard (Tools Menu)
	                                Professional Edition only
	
	Browse (Record Menu)             Browse (View Menu)
	
	Change Links  (Edit Menu)        Links (Edit Menu)
	
	Copy To (Database Menu)          Export (File Menu)
	
	Debug (Program Menu)             Debug Window (Tools Menu)
	
	Delete (Record Menu)             Delete Records (Table Menu)
	
	Double Space (Text Menu)         Double Space (Format Menu)
	
	Enlarge (Text Menu)              Enlarge (Format Menu)
	
	Find Again (Edit Menu)           Find (Edit Menu)
	Replace and Find                 Replace (Edit Menu)
	Again (Edit Menu),
	Replace All (Edit Menu)
	
	Font (Text Menu)                 Font (Format Menu)
	
	Generate (Program Menu)          Visual FoxPro generates only menus.
	
	Goto (Record Menu)               Go To Record (Table Menu)
	
	Indent (Text Menu)               Indent (Format Menu)
	
	Label  (Database Menu)           Print (File Menu)
	
	Locate (Record Menu)             Locate Record (Table Menu)
	
	Macros (Program Menu)            Macros (Tools Menu)
	
	Pack (Database Menu)             Remove Deleted Records (Database Menu)
	
	Printer Setup (File Menu)        Page Setup (File Menu)
	
	Recall (Record Menu)             Recall Records (Table Menu)
	
	Reduce (Text Menu)               Reduce (Format Menu)
	
	Reindex (Database Menu)          Rebuild Indexes (Table Menu)
	                                Rebuild Indexes (Database Menu)
	
	Replace (Record Menu)            Replace Records (Table Menu)
	
	Report (Database Menu)           Print (File Menu)
	Label (Database Menu)
	
	Single Space (Text Menu)         Single Space (Format Menu)
	
	Spelling (Text Menu)             Spelling (Tools Menu)
	
	Trace (Program Menu)             Trace Window (Tools Menu)
	
	Undent (Text Menu)               Remove Indent (Format Menu)
	
	Tool Differences
	----------------
	
	Some FoxPro 2.6 tools have new names and functionality in Visual FoxPro. For more
	information on Visual FoxPro designers, please see "Using Designers" in the
	Visual FoxPro Help file.
	
	FoxPro 2.6 tool          Visual FoxPro tool
	-----------------------------------------------
	Catalog Manager          Project Manager
	
	Project Manager          Project Manager
	
	Screen Builder           Form Designer
	
	Align (Object menu)      Layout toolbox
	
	Screen Builder Toolbox   Form Controls toolbox
	
	Control dialogs and      Properties window
	screen layout dialogs
	
	Menu Builder             Menu Designer
	
	RQBE                     Query Designer
	
	Report Writer            Report Designer
	
	Label Designer           Label Designer
	
	View window options      Tools Menu items
	
	Transporter              Conversion Options dialog box
	
	Browse window            Grid Control
	
	Screen Differences
	------------------
	
	You can run unconverted FoxPro version 2.6 screen (.SPR) files in Visual FoxPro.
	Visual FoxPro forms use code in events and methods and property settings instead
	of code snippets.
	
	                                 Visual FoxPro property,
	FoxPro 2.6 screen feature         method, or event
	------------------------------    ---------------------------------
	#DEFINE, #INSERT preprocessor     Global include file called by new
	statements                        .SPR file. (See "Checking the .SPR File"
	                                 in the Visual FoxPro Help file.)
	
	#Section 1 Setup code             Form set Load event
	
	#Section 2 Setup code             Form Load event
	
	Cleanup code except procedures    Unload event
	
	Code snippets                     Method and event code and properties
	
	Constants                         Resolved only in method and event code
	                                 (See "Checking the .SPR File" in the
	                                 Visual FoxPro Help file.)
	
	Macro substitutions               Unresolved in properties. Use variables
	                                 instead (See "Checking Converted FoxPro
	                                 2.6 Screens" in the Visual FoxPro Help
	                                 file.)
	
	READ                              WindowType property
	
	For more details on changing screen code in forms, see "Language Differences" or
	"Checking Code After Conversion" in the Visual FoxPro Help file.
	
	Report and Label Differences
	----------------------------
	
	You can use unconverted FoxPro version 2.6 reports and labels in Visual FoxPro
	but Visual FoxPro reports and labels enable you to set and control the data
	environment and to control report content through report variables.
	
	FoxPro 2.6 report                  Visual FoxPro report
	or label feature                   or label feature
	------------------------------------------------------------------------
	Controls generated with the        Might need adjustment in Visual FoxPro
	Report Wizard using "Position
	Relative To" options
	
	Memo field size                    Now 4 bytes. (See "Memo field type" in
	                                  the Visual FoxPro Help file)
	
	REPORT TO FILE                     REPORT TO FILE ASCII creates simple
	                                  text file
	
	REPORT ENVIRONMENTLABEL            Data Environment (View Menu)
	ENVIRONMENT                        (See "Setting Report and Data Sources"
	                                  and "Controlling a Report's Data
	                                  Sources" in the Visual FoxPro Help file)
	
	For more information on Visual FoxPro reports and labels, please see the "Report
	Designer" topic in the Visual FoxPro Help file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
