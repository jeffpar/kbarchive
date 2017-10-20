---
layout: page
title: "Q132229: Where to Set Environment Settings for Visual FoxPro"
permalink: /kb/132/Q132229/
---

## Q132229: Where to Set Environment Settings for Visual FoxPro

{% raw %}

	Article: Q132229
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 04-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro environment settings can be viewed or set by clicking Options on
	the Tools menu. They can also be set by using Visual FoxPro commands in the
	Command window. This article lists the Visual FoxPro environment settings, where
	to find them on the Options menu, the equivalent FoxPro command to use to set
	the environment setting, and whether the option is relevant to all data sessions
	or to the current data session only.
	
	MORE INFORMATION
	================
	
	To view and change environment settings in Visual FoxPro, click Options on the
	Tools menu. The Options dialog box has ten tabs, representing ten categories of
	environment options. The following table shows which tab to choose for each
	category of environment settings:
	
	Environment Setting Option                   Tools Options tab
	--------------------------------------------------------------
	Interface options                            View
	Data entry and programming options           General
	Text editor options                          Edit
	Table options                                Data
	Remote data access options                   Remote Data
	Directory, path, and file location options   File Locations
	Form Designer options                        Forms
	Project Manager options                      Projects
	Visual Class Library and OLE options         Controls
	Date, time, and numeric format options       International
	
	Visual FoxPro environment settings can also be set by using Visual FoxPro
	commands in the Command window. The following tables show which options are
	available under each tab in the Options menu and the equivalent language setting
	that can be used to set the environment for that setting.
	
	Modifying Interface Options
	---------------------------
	
	You can modify several features of the Visual FoxPro interface from the Options
	dialog View tab or by using the language equivalents.
	
	View Tab Option Setting         Equivalent Language Setting
	-----------------------------------------------------------
	Status Bar                      SET STATUS BAR
	Clock                           SET CLOCK
	Command Results (1)             SET TALK (1)
	System Messages                 SET NOTIFY
	Recently Used Project List      System registry only
	Open Last Project on Startup    System registry only
	
	(1) Option relevant to current data session only.
	
	Modifying Data-Entry and Programming Options
	--------------------------------------------
	
	You can modify data-entry and programming options from the General tab of the
	Options dialog, or by using the language equivalents shown in this table:
	
	General Tab Option Setting                 Equivalent Language Setting
	----------------------------------------------------------------------
	Warning Sound                              SET BELL
	Cancel Programs on Escape                  SET ESCAPE
	Show Trace Window                          SET ECHO
	Log Compilation Errors                     SET LOGERRORS
	dBASE Compatibility                        SET COMPATIBLE
	Use FoxPro Color Palette                   SET PALETTE
	Confirm File Replacement (1)               SET SAFETY (1)
	SET DEVELOPMENT                            SET DEVELOPMENT
	Navigation Keys                            SET KEYCOMP
	Fill New Records with Current Values (1)   SET CARRY (1)
	Enter or Tab to Exit Fields (1)            SET CONFIRM (1)
	
	(1) Option relevant to current data session only.
	
	Modifying Table Options
	-----------------------
	
	You can modify table options from the Data tab of the Options dialog, or by using
	the language equivalents shown in this table:
	
	Data Tab Option                 Equivalent Language Setting
	-----------------------------------------------------------
	Open Exclusive (1)              SET EXCLUSIVE (1)
	AutoSave (1)                    SET AUTOSAVE (1)
	Show Field Names                SET HEADINGS
	Prompt for Code Page            SET CPDIALOG
	Ignore Deleted Records          SET DELETED
	Rushmore Optimization           SET OPTIMIZE
	Unique Records in Indexes (1)   SET UNIQUE (1)
	Collating Sequence(1)           SET COLLATE (1)
	Record-counter Interval         SET ODOMETER
	Memo Block Size (1)             SET BLOCKSIZE (1)
	Browse-refresh Interval (1)     SET REFRESH (1)
	Table-refresh Interval1         SET REFRESH (1)
	SET NEAR (1)                    SET NEAR (1)
	SET EXACT (1)                   SET EXACT (1)
	SET ANSI (1)                    SET ANSI (1)
	Automatic File Locking (1)      SET LOCK (1)
	Multiple Record Locks (1)       SET MULTILOCKS (1)
	Buffering                       CURSORSETPROP("Buffering",...)
	Reprocessing (1)                SET REPROCESS (1)
	
	(1) Option relevant to current data session only.
	
	Modifying Remote Data Access Options
	------------------------------------
	
	You can modify remote data access options for the View and Connection designers
	from the Remote Data tab of the Options dialog, or by using the language
	equivalents shown in this table:
	
	Remote Data Tab Option        Equivalent Language Setting
	------------------------------------------------------------------
	Share Connection              CURSORSETPROP("ShareConnection",...)
	Fetch Memo on Demand          CURSORSETPROP("FetchMemo",...)
	SQL Updates: Criteria         CURSORSETPROP("WhereType",...)
	SQL Updates: Method           CURSORSETPROP("UpdateType",...)
	Records to Fetch at a Time    CURSORSETPROP("FetchSize",...)
	Maximum Records to Fetch      CURSORSETPROP("MaxRecords",...)
	Use Memo for Fields           CURSORSETPROP("UseMemoSize",...)
	Records to Batch Update       CURSORSETPROP("BatchUpdateCount",...)
	Asynchronous Execution        SQLSETPROP("Asynchronous",...)
	Display Warnings              SQLSETPROP("DispWarnings",...)
	Batch Processing              SQLSETPROP("BatchMode",...)
	Automatic Transactions        SQLSETPROP("Transactions",...)
	Show Login                    SQLSETPROP("DispLogin",...)
	Connection Timeout            SQLSETPROP("ConnectTimeOut",...)
	Idle Timeout                  SQLSETPROP("IdleTimeOut",...)
	Query Timeout                 SQLSETPROP("QueryTimeOut",...)
	Wait Time                     SQLSETPROP("WaitTime",...)
	
	Modifying Directory Path and File Location Options
	--------------------------------------------------
	
	You can modify directory, path, and file options from the File Locations tab of
	the Options dialog, or by using the language equivalents shown in this table:
	
	File Locations Tab     Equivalent Language Setting
	--------------------------------------------------
	
	Default Directory      SET DEFAULT
	Search Path1           SET PATH1
	Temporary Files        TMPFILES
	Help File              SET HELP
	Resource File          SET RESOURCE
	Converter              _CONVERTER
	Menu Builder           _GENMENU
	Spelling Checker       _SPELLCHK
	Builders               _BUILDER
	Wizards                _WIZARD
	
	Modifying Date, Time, and Numeric Format Options
	------------------------------------------------
	
	You can modify date, time, and numeric format options for the current data
	session from the International tab of the Options dialog, or by using the
	language equivalents shown in this table:
	
	International Tab Option    Equivalent Language Setting
	-------------------------------------------------------
	Use System Settings (1)     SET SYSFORMATS (1)
	Date Format (1)             SET DATE (1)
	Date Separator (1)          SET MARK TO (1)
	Century (1)                 SET CENTURY (1)
	12-Hour                     SET HOURS
	24-Hour                     SET HOURS
	Seconds                     SET SECONDS
	Currency Format (1)         SET CURRENCY (1)
	Currency Symbol (1)         SET CURRENCY (1)
	1000 Separator (1)          SET SEPARATOR (1)
	Decimal Separator (1)       SET POINT (1)
	Decimal Digits (1)          SET DECIMALS (1)
	Week Starts on              SET FDOW
	First Week of Year          SET FWEEK
	
	(1) Option relevant to current data session only.
	
	REFERENCES
	==========
	
	For more information about setting Visual FoxPro environment settings, please
	see "Environment" in the Visual FoxPro Help file.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	

{% endraw %}
