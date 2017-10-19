---
layout: page
title: "Q130306: Save/SET/Restore of SET Environment Settings"
permalink: /kb/130/Q130306/
---

## Q130306: Save/SET/Restore of SET Environment Settings

	Article: Q130306
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In version 2.x, environment settings such as "DELETED" were often stored into
	memory variables at the beginning of a section of code. At the end, the settings
	were manually reassigned to the original value. This article demonstrates an
	object-oriented approach to saving and restoring environment settings.
	
	MORE INFORMATION
	================
	
	The class "cSET" demonstrates this technique. In this class, a number of the
	current SET environment settings for DELETED, ALTERNATE, and DECIMALS are stored
	in objects. One object is created for each environment setting that should be
	stored. This class could easily be expanded to include additional environment
	settings.
	
	When the class, cSET, is instantiated in your form or other application
	component, an object is created for each desired environment setting. The
	CONSTRUCTOR method is invoked whenever you want to change an environment
	setting. It creates a command string that sets the desired temporary environment
	setting. When the instantiated class object is released, the DESTRUCTOR method
	is called. This method restores each environment setting to its state at the
	time cSET was instantiated.
	
	1. To use this approach in an application, begin by creating a program that
	  contains the class definition.
	
	     * Begin code example
	     * Save This as CSET.PRG
	     * This class provides SET environment save/SET/restore capabilities
	     * When the class is instantiated, the current SET environment is
	     * saved & SET to the desired value. When the instantiated object goes
	     * out of scope, the environment is restored.
	
	     * Usage:
	     *  CreateObject( "CSET", <cExpr1>, <cExpr2> | <nExpr2> [, <cExpr3>] )
	     *
	     *   cExpr1 = One of the SET commands
	     *   cExpr2 = Appropriate character value for the SET command
	     *   nExpr2 = Appropriate numeric value for the SET command
	     *   cExpr3 = Optional character value for SET commands that are both
	     *            ON | OFF
	     *            and have another value (like ALTERNATE, FIELDS, etc.)
	     *
	     * Examples:
	     *   loDeletedSave   = createobject( "CSET", "deleted", "on" )
	     *   loDecimalsSave  = createobject( "CSET", "decimals", 5 )
	     *   loAlternateSave = createobject( "CSET", "alternate", "on", ;
	     *                     "alter.txt")
	
	     DEFINE CLASS CSET AS CUSTOM
	
	     * PROTECTED Data Members
	     * =====================================================
	     PROTECTED mcSET               && SET command
	     PROTECTED muOrgValue          && Original value of the SET
	     PROTECTED muOrgValue1         && Original secondary value of the SET
	
	     * Public Data Members
	     * ========================================================
	     * NONE
	
	     * PROTECTED Function Members
	     * =================================================
	
	     * Constructor Method
	     * ----------------------------------------------------------
	
	     PROTECTED FUNCTION Init
	     PARAMETER pcSET, puNewValue, pcNewValue1
	
	     LOCAL lnParmCount          && number of PARAMETERs sent to init
	     LOCAL lcSETCommand            && constructed SET command
	
	     lnParmCount = PARAMETERS()
	
	     * Default the data members
	     This.mcSET = ""
	     This.muOrgValue = ""
	     This.muOrgValue1 = ""
	
	     IF ( lnParmCount < 2 )
	     *   This.error( "some error" )
	        RETURN
	     ENDIF
	
	     * Save current environment
	
	     This.mcSET       = pcSET
	     This.muOrgValue  = SET( pcSET )
	     This.muOrgValue1 = SET( pcSET, 1 )
	     IF ( This.muOrgValue == This.muOrgValue1 )
	        * throw This away because we don't need it
	        This.muOrgValue1 = ""
	     ENDIF
	
	     IF ( lnParmCount = 3 )
	        * optional argument handling
	        lcSETCommand = pcSET + " to " + pcNewValue1
	        SET &lcSETCommand
	     ENDIF
	
	     IF ( TYPE( "This.muOrgValue" ) == 'C' )
	        * character type of SET
	        lcSETCommand = puNewValue
	        IF ( ! INLIST( This.muOrgValue, "ON", "OFF" ) )
	           * not a simple ON|OFF so add a TO keyword
	           lcSETCommand = "TO " + puNewValue
	        ENDIF
	     ELSE
	        * numeric type of SET
	        lcSETCommand = "TO " + STR( puNewValue )
	     ENDIF
	
	     lcSETCommand = pcSET + " " + lcSETCommand
	     SET &lcSETCommand                          && change the SET
	
	     * Destructor Method
	     * ---------------------------------------------------- ------
	     PROTECTED function Destroy
	
	     *LOCAL lcSETCommand            && constructed SET command
	
	     IF ( EMPTY( This.mcSET ) )
	        RETURN
	     ENDIF
	
	     IF ( TYPE( "This.muOrgValue" ) == 'C' )
	        * character type of SET
	        lcSETCommand = This.muOrgValue
	        IF ( ! INLIST( This.muOrgValue, "ON", "OFF" ) )
	           * not a simple ON|OFF so add a TO keyword
	           lcSETCommand = "TO " + This.muOrgValue
	        ENDIF
	     ELSE
	        * numeric type of SET
	        lcSETCommand = "TO " + STR( This.muOrgValue )
	     ENDIF
	
	     lcSETCommand = This.mcSET + " " + lcSETCommand
	     SET &lcSETCommand                              && restore the SET
	
	     IF ( ! EMPTY( This.muOrgValue1 ) )
	        * restore secondary SET information
	        lcSETCommand = This.mcSET + " TO " + This.muOrgValue1
	        SET &lcSETCommand
	     ENDIF
	
	     * Public Function Members
	     * ====================================================
	
	     * Value Method
	     * ---------------------------------------------------------------
	
	     * RETURN the current values of the PROTECTED data members in a comma
	     * delimited string.
	
	     FUNCTION Value
	     LOCAL lcRETURNValue
	
	     IF ( TYPE( "This.muOrgValue" ) == 'C' )
	        lcRETURNValue = This.mcSET + "," + This.muOrgValue
	     ELSE
	        lcRETURNValue = This.mcSET + "," + ;
	           ALLTRIM( STR( This.muOrgValue ) )
	     ENDIF
	
	     IF ( ! EMPTY( This.muOrgValue1 ) )
	        lcRETURNValue = lcRETURNValue + "," + This.muOrgValue1
	     ENDIF
	
	     RETURN lcRETURNValue
	
	     ENDDEFINE
	
	     *** END CODE EXAMPLE FOR cSET.PRG
	
	2. Create a program with the following code. This code would normally be placed
	  in the load event of a form, or at the top of a .PRG file. For the purposes
	  of demonstration, it is being placed in a separate program file:
	
	     ******************************************************************
	     *Begin code example
	     ******************************************************************
	
	     * Driver program to test CSET class
	
	     SET PROCEDURE TO cset ADDITIVE
	
	     CLEAR
	     SET DELETED ON       && start it out on for testing
	
	     _Screen.Show
	     ? "Deleted:", SET("deleted")
	     loDeletedSave = CreateObject( "CSET", "deleted", "off" )
	     ? "Value:", loDeletedSave.Value()
	     ? "Deleted:", SET("deleted")
	
	3. Run the program created in step 2. The following values should be displayed
	  on the screen:
	
	  Deleted: ON
	  Value: deleted, ON
	  Deleted: OFF
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
