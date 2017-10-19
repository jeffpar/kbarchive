---
layout: page
title: "Q129977: Recommended Naming Conventions for Visual FoxPro"
permalink: /kb/129/Q129977/
---

## Q129977: Recommended Naming Conventions for Visual FoxPro

	Article: Q129977
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp600
	Last Modified: 11-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	For consistency, readability, and making troubleshooting a little easier,
	standard naming conventions should be used in programming. Some naming
	conventions are required for sample code. This article gives the recommended
	standard naming conventions for constants, variables, objects, tables, and
	windows in Visual FoxPro. This information is available in Help by typing the
	following in the Command Window:
	
	     HELP naming conventions
	
	MORE INFORMATION
	================
	
	Constant Naming Conventions
	---------------------------
	
	Syntax: NAME
	Example: #DEFINE MAX_VALUE 10
	
	Render constants in all uppercase letters.
	
	Variable Naming Conventions
	---------------------------
	
	Syntax: [Scope]TypeName
	
	The Scope prefix is recommended but not required. In some cases, explicit scoping
	does not apply. For example, in the main program of a stand-alone application,
	there is no difference in visibility for variables scoped as PUBLIC or PRIVATE.
	Scope specifies the range of reference for the variable. For example, local
	variables can be referenced only within the procedure that defines them. Public
	variables are accessible from anywhere in the application. The choices for Scope
	are:
	
	  Scope  Description          Example
	  ---------------------------------------
	  l      Local                lnCounter
	  p      Private (default)    pnStatus
	  g      Public (global)      gnOldRecno
	  t      Parameter            tnRecNo
	
	The Type prefix is always relevant and is required in sample programs. Type
	specifies the data type for the variable. The choices for Type are:
	
	  Type   Description    Example
	  -----------------------------------
	  a      Array          aMonths
	  c      Character      cLastName
	  y      Currency       yCurrentValue
	  d      Date           dBirthDay
	  t      Datetime       tLastModified
	  b      Double         bValue
	  f      Float          fInterest
	  l      Logical        lFlag
	  n      Numeric        nCounter
	  o      Object         oEmployee
	  u      Unknown        uReturnValue
	
	Object Naming Conventions
	-------------------------
	
	Syntax: PrefixName
	
	Follow this suggested format for naming objects. The choices for Prefix are:
	
	  Prefix           Object           Example
	  ---------------------------------------------------
	  chk              check box        chkReadOnly
	  cbo              ComboBox         cboEnglish
	  cmd              CommandButton    cmdCancel
	  cmg              CommandGroup     cmgChoices
	  cnt              Container        cntMoverList
	  ctl              Control          ctlFileList
	  <user-defined>   Custom           user-defined
	  edt              EditBox          edtTextArea
	  frm              Form             frmFileOpen
	  frs              FormSet          frsDataEntry
	  grd              Grid             grdPrices
	  grc              Column           grcCurrentPrice
	  grh              Header           grhTotalInventory
	  img              Image            imgIcon
	  lbl              Label            lblHelpMessage
	  lin              Line             linVertical
	  lst              list box          lstPolicyCodes
	  olb              OLEBoundControl  olbObject1
	  ole              OLE              oleObject1
	  opt              OptionButton     optFrench
	  opg              OptionGroup      opgType
	  pag              Page             pagDataUpdate
	  pgf              PageFrame        pgfLeft
	  sep              Separator        sepToolSection1
	  shp              Shape            shpCircle
	  spn              Spinner          spnValues
	  txt              text box          txtGetText
	  tmr              Timer            tmrAlarm
	  tbr              ToolBar          tbrEditReport
	
	Table Field Naming Conventions
	------------------------------
	
	Syntax: Alias.TypeName
	Arguments: Type
	
	Follow this suggested format for naming fields in tables. These conventions are
	recommended, not required. Type specifies the data type for a field in a table.
	The choices for Type are:
	
	  Type  Description    Example
	  -------------------------------------
	  c     Character    Customer.cLastName
	  d     Date         Customer.dBirthDay
	  t     Datetime     Customer.tLastMod
	  b     Double       Customer.bRate
	  f     Float        Customer.fValue
	  g     General      Customer.gPicture
	  l     Logical      Customer.lSellMail
	  m     Memo         Customer.mComments
	  y     Currency     Customer.yYearTDate
	  n     Numeric      Customer.nItems
	  i     Integer      Customer.iCustID
	
	Window Naming Conventions
	-------------------------
	
	Syntax: wName
	Example:
	
	  DEFINE WINDOW wCustomerInvoices ;
	                FROM nFirstRow, nFirstColumn TO nLastRow, nLastColumn
	
	Follow this suggested format for naming windows. Do not use a prefix on class
	definitions. Use prefixes only when the object is instantiated.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbvfp300 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP600
	Version           : 3.00
	
	=============================================================================
	
