---
layout: page
title: "Q173738: INFO: Object Hungarian Notation Naming Conventions for VB"
permalink: kb/173/Q173738/
---

## Q173738: INFO: Object Hungarian Notation Naming Conventions for VB

	Article: Q173738
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This is a list of Visual Basic control and object prefixes provided as a
	reference for consistent use of Hungarian Notation. This list will assist in
	standardizing the structure, coding style and logic of an application.
	
	Object                             Prefix                Example
	--------------------------------------------------------------------------
	Form                               frm                   frmFileOpen
	Check box                          chk                   ReadOnly
	Combo box                          cbo                   cboEnglish
	Data-bound combo box               dbc                   dbcEnglish
	Command button                     cmd                   cmdCancel
	Data                               dat                   datBiblio
	Directory list box                 dir                   dirSource
	Drive list box                     drv                   drvTarget
	File list box                      fil                   filSource
	Frame                              fra                   fraLanguage
	Grid                               grd                   grdPrices
	Data-bound grid                    dbg                   dbgPrices
	Horizontal scroll bar              hsb                   hsbVolume
	Image                              img                   imgIcon
	Label                              lbl                   lblHelpMessage
	Line                               lin                   linVertical
	List box                            lst                  lstPolicyCodes
	Data-bound list box                dbl                   dblPolicyCode
	Menu                               mnu                   mnuFileOpen
	OLE container                      ole                   oleObject1
	Option button                      opt                   optFrench
	Picture box                        pic                   picDiskSpace
	Shape                              shp                   shpCircle
	Text box                           txt                   txtGetText
	Timer                              tmr                   tmrAlarm
	
	Object                             Prefix                Example
	------------------------------------------------------------------------
	Vertical scroll bar                vsb                   vsbRate
	Animation button                   ani                   aniMailBox
	bed      Pen                       Bedit                 bedFirstName
	Checkbox                           chk                   chkReadOnly
	Picture clip                       clp                   clpToolbar
	Communications                     com                   comFax
	Control                            ctl                   ctrCurrent
	Data control                       dat                   datBiblioDirectory
	Directory list box                 dir                   dirSource
	Common dialog ctrl                 dlg                   dlgFileOpen
	Drive list box                     drv                   drvTarget
	File list box                      fil                   filSource
	Form                               frm                   frmEntry
	Frame (3d)                         fra                   fraStyle
	Gauge                              gau                   gauStatus
	Group push button                  gpb                   gpbChannel
	Graph                              gra                   graRevenue
	Grid                               grd                   grdPrices
	Pen Hedit                          hed                   hedSignature
	Horizontalscrollbar                hsb                   hsbVolume
	Image                              img                   imgIcon
	Pen Ink                            ink                   inkMap
	Keyboard key status                key                   keyCaps
	Label                              lbl                   lblHelpMessage
	Line                               lin                   linVertical
	MDI child form                     mdi                   mdiNote
	MAPI message                       mpm                   mpmSentMessage
	MAPI session                       mps                   mpsSession
	MCI                                mci                   mciVideo
	Menu                               mnu                   mnuFileOpen
	Object                             obj                   objUserTable
	Option Button (3d)                 opt                   optRed
	Outline control                    out                   outOrgChart
	3d Panel                           pnl (3d)              pnlTitleList
	Report control                     rpt                   rptQtr1Earnings
	Shape controls                     shp                   shpCircle
	Spin control                       spn                   spnPages
	Timer                              tmr                   tmrAlarm
	Vertical scroll bar                vsb                   vsbRate
	
	Database Objects                   Prefix                Example
	--------------------------------------------------------------------------
	ODBC Database                      db                    dbAccounts
	ODBC Dynaset object                dyn                   dynSalesByRegion
	Field collection                   fld                   fldCustomer
	Field object                       fld                   fldAddress
	Form                               frm                   frmNewUser
	Index object                       idx                   idxAge
	Index collection                   idx                   idxNewAge
	Macro                              mcr                   mcrCollectUsers
	QueryDef object                    qry                   qrySalesByRegion
	Query                              qry                   qrySalesByRegion
	Report                             rpt                   rptAnnualSales
	Snapshot object                    snp                   snpForecast
	Table object                       tbl                   tblCustomer
	TableDef object                    tbd                   tbdCustomers
	
	The following table lists standard third-party vendor name prefix characters to
	be used with control prefixes:
	
	Vendor                         Abbreviation
	-------------------------------------------
	MicroHelp (VBTools)            m
	Pioneer Software Q+E Database  p
	Crescent Software              c
	Sheridan Software              s
	Other (miscellaneous)          o
	
	Objects                            Prefix                Example
	---------------------------------------------------------------------
	Alarm(Microhelp)                   almm                  almmAlarm
	Animate(Microhelp)                 anim                  animAnimate
	Callback(Microhelp)                calm                  callback
	Combo Box(Pioneer)                 cbop                  cbopComboBox
	Combo Box(Sheridan)                cbos                  cbosComboBox
	DB_Check(Pioneer)                  chkp                  chkpCheckBox
	chart(Microhelp)                   tm                    tmChart
	Clock(Microhelp)                   clkm                  clkmClock
	Command Button(Microhelp)          cmdm                  cmdmCommandButton
	DB_Command(Pioneer)                cmdp                  cmdpCommandButton
	Command Button(Group)(Microhelp)   cmgm                  cmgmBtton
	Command Button (icon) (Microhelp)  cmim                  cmimCommandButton
	CardDeck(Microhelp)                crdm                  crdmCard
	Dice(Microhelp)                    dicm                  dicmDice
	SSDir(Sheridan)                    dirs                  dirsDirList
	SSDrive(Sheridan)                  drvs                  drvsDriveList
	File List(Microhelp)               film                  filmFileList
	SSFile(Sheridan)                   fils                  filsFileList
	Flip(Microhelp)                    flpm                  flpmButton
	Form Scroll(Microhelp)             fsrm                  fsrmFormScroll
	Gauge(Microhelp)                   gagm                  gagmGauge
	Graph(Other)                       gpho                  gphoGraph
	Q_Grid(Pioneer)                    grdp                  grdpGrid
	Horizontal Scroll Bar(Microhelp)   hsbm                   hsbmScroll
	DB_Hscroll(Pioneer)                hsbp                   hsbpScroll
	Histo(Microhelp)                   hstm                   hstmHistograph
	Invisible(Microhelp)               invm                   invmInvisible
	Icon Tag(Microhelp)                itgm                   itgmListBox
	Key State(Microhelp                kstm                   kstmKeyState
	Label (3d) (Microhelp)             lblm                   lblmLabel
	Line(Microhelp)                    linm                   linmLine
	DB_List(Pioneer)                   lstp                   lstpListBox
	SSList(Sheridan)                   lsts                   lstsListBox
	MDI Control(Microhelp)             mdcm                   mdcmMDIChild
	SSMenu(Sheridan)                   mnus                   mnusMenu
	Marque(Microhelp)                  mrqm                   mrqmMarque
	OddPic(Microhelp)                  odpm                   odpmPicture
	Picture(Microhelp)                 picm                   picmPicture
	DB_Picture(Pioneer)                picp                   picpPicture
	Property Vwr(Microhelp)            pvrm                   vrmPropertyViewer
	DB_RadioGroup(Group)(Pioneer)      radp                   radqRadioGroup
	Slider(Microhelp)                  sldm                   sldmSlider
	Spinner(Microhelp)                 spnm                   spnmSpinner
	Spreadsheet(Microhelp)             sprm                   sprmSpreadsheet
	Stretcher(Microhelp)               strm                   strmStretcher
	Screen Saver(Microhelp)            svrm                   svrmSaver
	Switcher(Microhelp)                swtm                   swtmSwitcher
	Tag(Microhelp)                     tagm                   tagmListBox
	Timer(Microhelp)                   tmrm                   tmrmTimer
	ToolBar(Microhelp)                 tolm                   tolmToolBar
	Tree(Microhelp)                    trem                   tremTree
	Input(Microhelp) (Text)            txtm                   inpmText
	DB_Text(Microhelp)                 txtp                   txtpText
	Vertical Scroll Bar(Microhelp)     vsbm                   vsbmScroll
	DB_VScroll(Pioneer)                vsbp                   vsbpScroll
	
	REFERENCES
	==========
	
	The base list can also be found in the Programmers Guide under the Object Naming
	Conventions Section.
	
	Additional query words: kbVBp500 kbVBp600 kbdse kbDSupport kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
