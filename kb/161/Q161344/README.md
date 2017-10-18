---
layout: page
title: "Q161344: INFO: Visual Basic 4.0 and Visual Basic 5.0 Compatibility"
permalink: kb/161/Q161344/
---

## Q161344: INFO: Visual Basic 4.0 and Visual Basic 5.0 Compatibility

	Article: Q161344
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbsetup kbtool kbVBp400 kbVBp500 kbGrpDSVB kb32bitOnly
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	VB4/VB5 Compatibility
	---------------------
	
	This article provides a summary of compatibility issues for between Visual Basic
	4.0 and Visual Basic 5.0. For the most part VB4 and VISUAL BASIC 5.0 are very
	compatible. Through the Visual Studio Service Pack most of the issues below have
	been fixed. This article summarizes the few incompatibilities and provides links
	to other Knowledge Base articles with more details of the issues.
	
	This article is broken up into four sections. The first section discusses
	compatibility issues with installing VB4 and VISUAL BASIC 5.0 on the samemachine
	to do development. The second section discusses code compatibility between VB4
	and VB5. The third section discusses compatibility between
	applications/components built in VB4 and applications/components built with
	VISUAL BASIC 5.0 . Finally, the third section lists the files shared by the two
	products.
	
	Here is a summary of the article contents:
	
	I. Development Environment Compatibility
	
	1. Control Framework
	
	  a. Binary Persistence
	
	  b. Setup Dependencies
	
	  c. Data Bound Controls (Fixed in SP2)
	
	2. Add-Ins
	
	  a. Changes to the Add-In Model
	
	  b. VB4-16 Add-In Failure
	
	3. Control Hosting
	
	  a. Third-Party Controls
	
	  b. Forms with many Controls (Fixed in SP2)
	
	  c. Invisible MFC Controls in Controls (Fixed in SP2)
	
	4. Automation
	
	  a. Early-Binding from VB4-16 to VISUAL BASIC 5.0
	
	  b. New VBR Format
	
	5. ActiveX Control Development
	
	  a. Property Display
	
	II. Code Compatibility
	
	1. Printer Object
	
	  a. Printers Collection (Fixed in SP2)
	
	  b. User Defined Scaling (Fixed in SP2)
	
	  c. Fonts (Fixed in SP2)
	
	2. Language
	
	  a. Passing Class Properties
	
	  b. Large User Defined Types (Fixed in SP2)
	
	3. Controls
	
	  a. Combo Box Text
	
	4. Forms
	
	  a. MDI Child Show
	
	5. Data Access
	
	  a. RDO Move 0 (Fixed in SP1)
	
	  b. RDOQueries Collection
	
	  c. RDC Update Error (Fixed in SP1)
	
	  d. RDC Closing Resultset of Bound DBGrid (Fixed in SP1)
	
	  e. DBGrid Display Problems Bound to RDC (Fixed in SP1)
	
	III. Application/Component Compatibility
	
	1. Listview FindItem Method (Fixed in SP1)
	
	2. DBCombo Change Event
	
	3. SSTab Looses Controls (Fixed in SP2)
	
	4. VBA Type Information
	
	5. Statusbar Time Panel (Fixed in SP2)
	
	IV. Shared Files
	
	MORE INFORMATION
	================
	
	I. Development Environment Compatibility
	----------------------------------------
	
	Many people are still developing or supporting applications using Microsoft
	Visual Basic 4.0 while switching over to Microsoft Visual Basic 5.0. There are
	some known issues with maintaining both versions of Visual Basic on the same
	machine. This section of the article discusses these known issues and provides
	options for working around them.
	
	1. Control Framework
	
	  In order to improve performance in VISUAL BASIC 5.0 the Visual Basic
	  development team decided to create a new framework for developing ActiveX
	  controls. In Visual Basic 4.0 all controls were developed with the Microsoft
	  Foundation Classes (MFC) Control Development Kit (CDK.) This new control
	  framework was designed to be lighter and faster to give VB customers improved
	  performance. The framework developed by the VB team was a precursor to the
	  ActiveX Template Library (ATL) framework for creating controls.
	
	  Visual Basic 5.0 shipped with new versions of the following controls compiled
	  using the new framework. When installing VB5 on the same system as VB4, the
	  VB4 versions of these controls are replaced with the VISUAL BASIC 5.0
	  versions. Controls that are not listed were not updated.
	
	     comctl32.ocx
	     comdlg32.ocx
	     crystl32.ocx
	     dbgrid32.ocx
	     dblist32.ocx
	     mci32.ocx
	     mscomm32.ocx
	     msmapi32.ocx
	     msmask32.ocx
	     picclp32.ocx
	     richtx32.ocx
	     sysinfo.ocx
	     tabctl32.ocx
	
	  The VB development team made every effort to design and code their control
	  framework to be compatibility with controls previously compiled using the MFC
	  CDK. They did a fantastic job at maintaining this compatibility given the
	  task of completely redesigning the internals of the controls to improve
	  performance. However, there were a couple of unanticipated issues with the
	  design that can cause problems for VB4 developers if they are not careful.
	
	  a. Binary Persistence
	
	     Controls written in the new framework persist binary data differently than
	     MFC CDK controls. This change was made to improve performance. Also, it
	     was intended to cause fewer changes to FRX files resulting in fewer
	     problems with checking in forms under source code control.
	
	     Although the binary persistence of the controls changed, the new controls
	     still include code for reading the old persistence format. This allows VB4
	     projects to be upgraded to the new control simply by loading the project
	     in VB4 or VISUAL BASIC 5.0 on a system with the new control. However, the
	     new controls always write out the persistent data in the new format. This
	     means developers that do not have the new control on their systems will
	     not be able to load VB4 or VISUAL BASIC 5.0 projects without the new
	     control. This isn't an issue for VISUAL BASIC 5.0 because the new controls
	     get installed with VISUAL BASIC 5.0 . However, this can cause problems for
	     VB4 developers. Here are a couple scenarios where this is a issue:
	
	     Scenario #1:
	
	     Bob installs VISUAL BASIC 5.0 on his system that already has VB4 installed.
	     He loads a VB4 project in VB4 to make some bug fixes. He makes some
	     changes and saves his work. He decides later that he wants to continue
	     work on the project from his laptop on the bus ride home. He has VB4 but
	     not VISUAL BASIC 5.0 on the laptop and assumes that he will be able to
	     load the VB4 project and continue working on it. So, he copies the project
	     files to the laptop and leaves. Bob gets settled on the bus and attempts
	     to load the project.
	
	     Scenario #2:
	
	     Joe is working on a shared development project in using VB4 and Visual
	     SoruceSafe. In the morning he checks out the form he is working on makes
	     some changes and checks them in. His co-worker on the project gets his
	     changes to test the project and everything works. At lunch Joe decides to
	     load up Microsoft Internet Explorer and surf the web while his co-worker
	     goes out to lunch. Joe navigates to a cool page that brings up a
	     certificate and a prompt asking him if he would like to download an
	     ActiveX control used by the web page. He says OK and continues. This
	     download process upgrades some of the controls on his system to the newer
	     VISUAL BASIC 5.0 versions. After lunch he checks out the form again, makes
	     some additional changes, and checks the form back in. Once again his
	     co-worker gets the form out of source code control and attempts to load
	     it.
	
	     In both these scenarios the projects will have problems loading the forms
	     that were upgraded to the VISUAL BASIC 5.0 versions of the controls
	     because only the VB4 versions of the controls are present on the systems
	     where they are being loaded. The forms contain persisted data in the
	     VISUAL BASIC 5.0 format that is not understood by the VB4 versions of the
	     controls. There are several other similar scenarios to those above that
	     can cause this problem for VB4 developers.
	
	     This issue will also cause problems for VB4 development projects that
	     utilize a single set of source code for both 32-bit and 16-bit
	     development. The 16-bit versions of the controls only understand the data
	     persisted in the VB4 format. So, if you load a project in VB4-32 on a
	     machine with the VISUAL BASIC 5.0 controls and save it VB4-16 will no
	     longer be able to load the forms with the new persistence format.
	
	     The best work-around to the binary persistence issue is to make sure VB4
	     development machines only have VB4 controls on them. This can be
	     accomplished by keeping VB4 and VISUAL BASIC 5.0 installed on different
	     machines or different operating systems on a dual boot system. Another
	     option is to write batch files or a utility to install and register the
	     VB4 controls before doing VB4 development and to install and register the
	     VISUAL BASIC 5.0 controls before doing VISUAL BASIC 5.0 development.
	     Another possible work-around is to make sure all development machines are
	     upgraded to the VISUAL BASIC 5.0 versions of the controls. However, there
	     are additional issues with using the VISUAL BASIC 5.0 controls in VB4 that
	     will be discussed in the next section of this document.
	
	  b. Setup Dependencies
	
	     Another effect of the new control framework is that the new versions of the
	     control have different dependencies. In general they have less
	     dependencies because they are no longer dependent on MFC. The VISUAL BASIC
	     5.0 Setup Wizard understands .DEP files that ship along with the new
	     framework versions of the controls listing all of their file dependencies.
	     However, the VB4 Setup Wizard uses SWDEPEND.INI to determine setup
	     dependencies. So, the VB4 Setup Wizard will create setup programs that
	     work just fine for the VB4 versions of the controls but probably won't
	     work with the VISUAL BASIC 5.0 versions of the controls.
	
	     The VISUAL BASIC 5.0 framework controls are all dependent on having the
	     following OLE Automation System files installed. They may also be
	     dependent upon having additional files installed that vary for each
	     control.
	
	        Filename       VB 5.0  Controls Need      VB5 SP2 Controls Need
	        ------------   --------------------   ---------------------
	        OLEAUT32.DLL   2.20.4054 or greater   2.10.4118 or greater
	          COMCAT.DLL   4.71      or greater   4.71      or greater
	        OLEPRO32.DLL   5.00.4055 or greater   5.00.4118 or greater
	        ASYCFILT.DLL   2.20.4056 or greater   2.20.4118 or greater
	         STDOLE2.TLB   2.20.4054 or greater   2.20.4118 or greater
	    
	
	     These files are installed by many Microsoft products and service packs so
	     it is very possible that they are already on systems.
	
	     Installation of some of these files may require a re-boot. Unfortunately,
	     the VB4 Setup Kit does not have the capability to install these files
	     correctly by doing a re-boot.
	
	     The result of these dependency issues is that the VB4 Setup Kit can not be
	     used to deploy the VISUAL BASIC 5.0 controls unless two things are done:
	
	     1. The SWDEPEND.INI needs to be updated to reflect the dependencies of the
	        VISUAL BASIC 5.0 new framework controls installed on the system. This
	        information can be obtained from the VB5DEP.INI and the matching .DEP
	        file for the control.
	
	     2. The OLE Automation system files listed above need to be properly
	        installed. Installing Office 97, VISUAL BASIC 5.0 , and other Microsoft
	        products can do this. Running MSVBVM50.EXE as described in the
	        following Knowledge Base Article can also do it:
	
	  Q180071 : FILE: Msvbvm50.exe Installs Visual Basic 5.0 Run-Time Files
	
	  c. Data Bound Controls (Fixed in SP2)
	
	     The VISUAL BASIC 5.0 data bound controls built in the new framework have a
	     bug that causes them to fail to bind correctly in the VB4 design
	     environment. This problem does not break applications compiled with the
	     old controls that are running on systems with the new controls. Also, it
	     does not affect VISUAL BASIC 5.0 development. The issue is that when you
	     bind more than one data-bound VISUAL BASIC 5.0 control to the data control
	     in VB4 the data will fail to appear at run-time in some of the bound
	     controls. This problem was fixed in Visual Studio 97 Service Pack Two. See
	     the following Knowledge Base article for more information:
	
	  Q171801 : FIX: Bound Controls Built in VB5 Do Not Work in VB4 IDE
	
	2. Add-Ins
	
	  For the most part add-ins continue to work. However, there are a couple of
	  issues with regards to add-ins and compatibility:
	
	  a. Changes to the Add-In Model
	
	     The VISUAL BASIC 5.0 IDE has changed extensively between VB4 and VISUAL
	     BASIC 5.0 . Support for multiple projects was added which greatly
	     increased the complexity of the add-in model that is provided. The VB
	     development team made every effort to allow add-ins created in VB4 to
	     continue to work in VISUAL BASIC 5.0 . However, in some cases this was
	     just not possible due to the new features of the design environment.
	
	     In some cases VB4 add-ins may cause VISUAL BASIC 5.0 to crash. If this
	     happens you should disable the add-in by editing the VBADDIN.INI and
	     setting the entry for the add-in to zero. If you have an add-in that is
	     having this kind of problem you will want to see if a new version is
	     available. In many cases you will want the new version anyway if it takes
	     advantage of the powerful new extensibility object model.
	
	     For more information on add-ins causing crashes in the VISUAL BASIC 5.0 IDE
	     see the following Knowledge Base article:
	
	  Q167346 TITLE: FIX: GPF Occurs When Starting Visual Basic 5.0
	
	  b. VB4-16 Add-In Failure
	
	     After installing VISUAL BASIC 5.0 VB4-16 add-ins will fail with the
	     message:
	
	  '<Name of Add-In>' could not be loaded.
	  Remove it from the list of available Add-Ins?
	
	     When VISUAL BASIC 5.0 installs it adds a new key in the registry under
	     HKEY_CLASSES_ROOT\TypeLib\{EF404E00-EDA6-101A-8DAF- 00DD010F7EBB} for the
	     new extensibility object model. This type library is correctly marked
	     version 5.0. However, 16-bit automation always attempts to grab the type
	     library with the greatest version number. Because of this 16-bit add-ins
	     attempt to use the VISUAL BASIC 5.0 type information which results in the
	     error. There is a work around for this by adding some additional entries
	     to the registry that have a higher version number but point at the VB4
	     Type Library. See the following Knowledge Base article for more
	     information:
	
	  Q169534 : PRB: VB 4.0 16-Bit Add-ins Fail After Installing VB 5.0
	
	3. Control Hosting
	
	  The VB development team worked very hard at speeding up the control hosting
	  code in VISUAL BASIC 5.0 . In the process they were very careful to maintain
	  compatibility with controls that worked in VB4. The VB testing verified this
	  with thorough examination of VB4 controls in VISUAL BASIC 5.0 . In general
	  VISUAL BASIC 5.0 control hosting is very compatible. However, there are a
	  couple issues discussed below.
	
	  a. Third-Party Controls
	
	     The VB testing team can not test every third-party control to make sure it
	     is compatible from version to version. Instead they rely upon extensive
	     beta testing to find these issues. All the biggest control makers
	     participate in our beta process and have the ability to report bugs to the
	     VB development team before we ship. The VB development team takes these
	     bug reports very seriously and fixes any problems that can be identified
	     as a bug in VB. They even fix many bugs that are identified as control
	     bugs by working around them in the VB control hosting code. If you are
	     having problems with a third-party control you should first contact the
	     creator to see if it is a bug and if an update has been released.
	
	  b. Forms with many Controls (Fixed in SP2)
	
	     The VISUAL BASIC 5.0 design environment has a problem when loading projects
	     containing forms with many controls. It will incorrectly map the names as
	     loading the controls which may result in a crash. There is a work-around
	     which is to remove the form after loading the project and add it back in.
	     This problem was fixed in Visual Studio 97 Service Pack Two. See the
	     following Knowledge Base article for more information:
	
	  Q167165 : BUG: Too Many Controls on a Form May Crash Visual Basic IDE
	
	  c. Invisible MFC Controls in Controls (Fixed in SP2)
	
	     There is problem in the VISUAL BASIC 5.0 development environment with MFC
	     based controls placed inside container controls such as the Picture Box,
	     Frame, and SSTab control having their Visible property set to false. The
	     issue is caused by MFC re-parenting the control to the desktop in this
	     situation. The VB4 control hosting code was able to handle this behavior.
	     However, the VISUAL BASIC 5.0 control hosting code does not handle this
	     and it is considered a bug. The result of this problem is that you may
	     experience a crash when closing a running form in the VISUAL BASIC 5.0
	     development environment. This problem was fixed in Visual Studio 97
	     Service Pack Two. For additional details see the following Knowledge base
	     article:
	
	  Q171556 : FIX: VB 5.0 IDE Causes Exception Violation During Unload of Form
	
	4. Automation
	
	  There a couple of OLE Automation issues that affect interoperability between
	  VB4 and VISUAL BASIC 5.0 .
	
	  a. Early-Binding from VB4-16 to VISUAL BASIC 5.0
	
	     32-bit OLE Automation has defined a new type information format. VISUAL
	     BASIC 5.0 uses this to improve performance. However, 16-bit automation can
	     not understand the new format. What this means is that you must late-bind
	     from a VB4-16 client to a VISUAL BASIC 5.0 32-bit server through
	     automation. In VB4 it was possible to early-bind from a VB4-16 client to a
	     VB4-32 server through automation.
	
	  b. New VBR Format
	
	     For VISUAL BASIC 5.0 the .VBR format was changed. The VB4 versions Setup
	     Wizard, CLIREG16.EXE, and CLIREG32.EXE do not understand this new format.
	     This means that the VB4 Setup Wizard can not create setup programs for VB4
	     clients that reference VISUAL BASIC 5.0 Remote Automation servers.
	
	5. ActiveX Control Development
	
	  VISUAL BASIC 5.0 created ActiveX controls are intended to be usable in VB4.
	  The VB testing team did testing to make sure they worked. For the most part
	  they work great. However, there may be limitations, issues, or differences
	  with VB4 as a control host that you need to be aware of when developing
	  ActiveX controls in VISUAL BASIC 5.0 .
	
	  a. Property Display
	
	     The VB4 Properties window will only display control properties that are
	     passed by value. If you are creating controls in VISUAL BASIC 5.0 for use
	     with VB4 you should use ByVal on every one of your public property
	     procedures. If you do not do this they will not be displayed in VB4 even
	     though they display just fine in VISUAL BASIC 5.0 . For more information
	     on this issue see the following Knowledge Base articles:
	
	  Q169772 : PRB: VB5 .OCX Property Missing from VB4 Properties Window
	
	II. Code Compatibility
	
	VB4 code is very compatible with VISUAL BASIC 5.0 . The majority of the time you
	should be able to port VB4 projects to VISUAL BASIC 5.0 with no code changes.
	However, there are a few problems and changes that may require you to change
	code in some projects. This section describes these issues.
	
	1. Printer Object
	
	  There are couple problems with the VISUAL BASIC 5.0 Printer object that may
	  require you to change your code when upgrading a project from VB4 to VISUAL
	  BASIC 5.0 .
	
	  a. Printers Collection (Fixed in SP2)
	
	     Setting an item of the Printers collection into the Printer object fails in
	     VISUAL BASIC 5.0 . The only way to work around this is to use API calls to
	     change the default printer. The following Knowledge Base article explains
	     the problem in detail and provides a code to work around the problem.
	     However, the work-around is not necessary if you install Visual Studio 97
	     Service Pack 2.
	
	  Q167735 : FIX: Setting Printer to Item in the Printers Collection Fails
	
	  b. User Defined Scaling (Fixed in SP2)
	
	     In previous versions of VB you could set up a user defined scale on the
	     printer by setting the ScaleMode property to indicate a user defined scale
	     mode. In VISUAL BASIC 5.0 this fails to switch the Printer to the user
	     defined scale mode. You can work around the problem by using the Scale
	     method instead. This problem was fixed in Visual Studio 97 Service Pack
	     Two. See the following Knowledge Base article for more information on this
	     issue.
	
	  Q166908 : FIX: ScaleMode for Printer Object Can't Create Custom Scale
	
	  c. Fonts (Fixed in SP2)
	
	     VB4 has some problems with loosing font attributes of the Printer object.
	     In VISUAL BASIC 5.0 the VB development team attempted to fix this problem.
	     In some cases they did just that however there have been reports that have
	     not been duplicated of loosing font attributes. There may also be
	     scenarios that worked in VB4 that now fail in VISUAL BASIC 5.0 . This
	     problem has been fixed in Visual Studio 97 Service Pack Two. Further
	     details can be found in the following Knowledge Base article.
	
	  Q168744 : FIX: Printer May Lose Font Attributes
	
	2. Language
	
	  There are a couple issues with the VBA language that may require you to make
	  code modifications when upgrading a VB4 project to VISUAL BASIC 5.0.
	
	  a. Passing Class Properties
	
	     In VB4 class properties declared using the public variable method were
	     always passed by reference to functions. Class properties declared using
	     property procedures in VB4 were always passed by value. In VISUAL BASIC
	     5.0 the new "Implements" feature forced the VB development team to always
	     use property procedures behind the scenes regardless of what syntax you
	     used to declare the property. Because of this all class properties are now
	     consistently passed by value. However, this change can force you to change
	     code if you relied upon the old behavior. In future versions of Visual
	     Basic the VB development team may add code to allow you to choose whether
	     to pass properties by value or by reference. The following Knowledge Base
	     article has additional details on the issue and explains code changes that
	     you might need to make.
	
	  Q166928 : FIX: Public Properties of VB4 Class Are Passed by Reference
	
	  b. Large User Defined Types (Fixed in SP2)
	
	     VISUAL BASIC 5.0 may crash when using large user defined types that worked
	     fine in VB4. Usually the user defined types that fail contain large arrays
	     as elements. This problem was fixed in Visual Studio 97 Service Pack Two.
	     For more information on the problem see the following Knowledge Base
	     article.
	
	  Q171557 : FIX: Compiling VB5 Applications with Large UDTs May Crash
	
	3. Controls
	
	  Most of the controls require no code changes. The following lists the known
	  issues that would require code changes.
	
	  a. Combo Box Text
	
	     In VISUAL BASIC 5.0 setting the Text property of a Combo Box in the Click
	     event will clear out the Text property. In previous versions of Visual
	     Basic this did not happen. This change in behavior will require code
	     changes to VB4 projects when converting to VISUAL BASIC 5.0 . Additional
	     information on the problem including the work-around can be found in the
	     following Knowledge Base article:
	
	  Q168824 : BUG: Setting ComboBox Control Text in Click Event Wipes Out Text
	
	4. Forms
	
	  Issues with Forms that may require you to make code changes when upgrading
	  from VB4 to VISUAL BASIC 5.0 are listed below.
	
	  a. MDI Child Show
	
	     In previous versions of Visual Basic you could use the Show method to bring
	     an MDI child to the front. However, in VISUAL BASIC 5.0 this no longer
	     works. The Show method was never documented to have this behavior and the
	     ZOrder method still works. For more information about this issue see the
	     following Knowledge Base Article:
	
	  Q168850 : BUG: MDIChild Form Not Brought to Front with Show Method
	
	5. Data Access
	
	  VISUAL BASIC 5.0 includes new versions of Data Access Objects (DAO), Remote
	  Data Objects (RDO), and the Remote Data Control (RDC.) The new versions are
	  contained in new DLLs. So, both the VB4 and VISUAL BASIC 5.0 versions can
	  co-exist on the same machine without any conflicts.
	
	  When you move a project from VB4 to VISUAL BASIC 5.0 it is recommended that
	  you upgrade to the new versions of DAO, RDO, and RDC. They have many bug
	  fixes and new features. However, there are a few problems and changes that
	  you should be aware of because they might require some code changes.
	
	  If for some reason you wish to continue using the old versions of DAO, RDO, or
	  RDC in your VISUAL BASIC 5.0 application you can. However, the VISUAL BASIC
	  5.0 Setup Wizard was not set up to deploy them. You may need to create .DEP
	  files or manually add all the necessary files to your setup program.
	
	  a. RDO Move 0 (Fixed in SP1)
	
	     In RDO 1.0 it was possible call the Move method with a parameter of zero to
	     refresh the contents of the current record in the ResultSet. This useful
	     feature is broken in the RDO 2.0 that shipped with VISUAL BASIC 5.0 .
	     However, it has been fixed in the updated version of RDO 2.0 that ships in
	     the Visual Studio 97 Service Pack. See the following KB article for more
	     information concerning this problem and the fix.
	
	  Q168162 : FIX: RDO Move 0 Fails to Refresh Record
	
	  b. RDOQueries Collection
	
	     Behavior of the RDOQueries collection has changed in RDO 2.0.
	
	  c. RDC Update Error (Fixed in SP1)
	
	     If you add a row to a Resultset using RDC, further navigation through the
	     ResultSet may cause an error. This only happens with the version of RDC
	     2.0 that shipped with VISUAL BASIC 5.0 . This problem has been fixed in
	     the version of RDC 2.0 that ships with the Visual Studio 97 Service Pack.
	     Additional information on the problem and the fix can be found in the
	     following Knowledge Base article.
	
	  Q168160 : FIX: Error on Update After AddNew with RDC and Bound Controls
	
	  d. RDC Closing Resultset of Bound DBGrid (Fixed in SP1)
	
	     If you bind the VISUAL BASIC 5.0 DBGrid control to the RDC 2.0 control that
	     ships with VISUAL BASIC 5.0 you will not be able to close the underlying
	     ResultSet. Any attempt to close it will result in an error. This problem
	     has been fixed in the versions of RDC 2.0 and DBGrid that ship with the
	     Visual Studio 97 Service Pack. You can find out more about this problem in
	     the following Knowledge Base article.
	
	  Q168158 : FIX: Can't Close Resultset if DBGrid Bound to RDC
	
	  e. DBGrid Display Problems Bound to RDC (Fixed in SP1)
	
	     The VISUAL BASIC 5.0 DBGrid control has a couple of problems displaying
	     data when bound to the VISUAL BASIC 5.0 RDC 2.0 control. First, it has a
	     problem displaying small ResultSets. Second, it will not display correctly
	     after a MoveLast. Both these problems have been fixed in the versions of
	     RDC 2.0 and DBGrid that ship with the Visual Studio 97 Service Pack. More
	     information about these issues is available in the following Knowledge
	     Base articles.
	
	  Q168156 : FIX: DBGrid Bound to RDC Displays Small Resultsets Incorrectly
	
	  Q168153 : FIX: DBGrid Bound to RDC Displays a Single Row After MoveLast
	
	III.  Application/Component Compatibility
	-----------------------------------------
	
	VB4 and VISUAL BASIC 5.0 built applications will co-exist without problems the
	majority of the time. However, there are some known compatibility issues.
	Microsoft is working to resolve these problems and will provide updated
	information as it becomes available. The following section describes
	compatibility issues that can affect existing built and deployed VB4
	applications and components.
	
	1. Listview FindItem Method (Fixed in SP1)
	
	  There is a problem with the VISUAL BASIC 5.0 ListView FindItem method when
	  searching on Sub-Items or Tags. In VB4 if no items were present in the
	  listview no error was returned. VISUAL BASIC 5.0 broke backward compatibility
	  by generating an error in this case. This issue is not expected to affect
	  many applications. It has also been fixed in an updated release of
	  COMCTL32.OCX available in the Visual Studio 97 Service Pack. See the
	  following Knowledge Base article for more information on the problem.
	
	  Q167122 : FIX: FindItem Method of ListView Incorrectly Returns an Error
	
	2. DBCombo Change Event
	
	  There are some cases where the VISUAL BASIC 5.0 DBCombo no longer fires the
	  Change Event as it did in VB4. This can break existing VB4 applications or
	  cause a loss of functionality. The following Knowledge Base article describes
	  the problem and how to work-around it.
	
	  Q166929 : BUG: DBCombo Control Change Event Does Not Fire
	
	3. SSTab Looses Controls (Fixed in SP2)
	
	  There is a problem with setting the SSTab control Tab and TabVisible
	  properties in the Form Load event that can cause controls contained on the
	  tabs to fail to appear. This problem is fixed in the Visual Studio Service
	  Pack Two. For more information on the problem see the following Knowledge
	  Base article:
	
	  Q167107 : FIX: Missing Controls on the SSTAB Control Tabs
	
	4. VBA Type Information
	
	  After installing VISUAL BASIC 5.0 or any product that uses VBA 5.0, such as
	  Microsoft Office 97, VB4 16-bit automation clients may receive the following
	  error:
	
	  "OLE Automation Error. -2147319784 (80028018)"
	
	  This problem does not affect VB4-32 or VISUAL BASIC 5.0 . The error occurs
	  when trying to pass VBA objects such as a Collection object and early binding
	  to it through type information. It is caused by 16-bit automation always
	  grabbing the type information with the highest version number. When version
	  5.0 type information for VBA is registered VB4-16 attempts to use it and can
	  not understand the format. The following Knowledge Base article describes the
	  problem and how to work-around it:
	
	  Q165490 : PRB: VB4 16-Bit OLE Clients Receive Error -2147319784
	
	5. Statusbar Time Panel (Fixed in SP2)
	
	  The VISUAL BASIC 5.0 StatusBar control does not update panels displaying the
	  time as frequently as VB4. This won't break any VB4 applications but it can
	  cause some questions when the time in an app quits updating every second as
	  it did in VB4. This problem has been fixed in the Visual Studio 97 Service
	  Pack. For more information on this issue see the following Knowledge Base
	  article:
	
	  Q168792 : BUG: Statusbar Time Panel May Not Update Properly
	
	IV.  Shared Files
	-----------------
	
	Visual Basic 4.0 and Visual Basic 5.0 share many files such as controls and
	dynamic link libraries. The following Microsoft Visual Basic 4.0 32-bit files
	are replaced with updated Microsoft Visual Basic 5.0 components when installing
	VISUAL BASIC 5.0 :
	
	  acmsetup.exe     msmask32.ocx     p2irdao.dll
	  comctl32.ocx     mssetup.dll      p2sodbc.dll
	  comdlg32.ocx     msvcrt20.dll     picclp32.ocx
	  compress.exe     msvcrt40.dll     richtx32.ocx
	  crpe32.dll       odbc16gt.dll     scp32.dll
	  crxlat32.dll     odbc32.dll       sqlsrv32.dll
	  crystl32.ocx     odbc32gt.dll     tabctl32.ocx
	  ctl3d32.dll      odbcad32.exe     u2ddisk.dll
	  dbgrid32.ocx     odbccp32.cpl     u2dmapi.dll
	  dblist32.ocx     odbccp32.dll     u2fcr.dll
	  dbnmpntw.dll     odbccr32.dll     u2fdif.dll
	  drvssrvr.hlp     odbcint.dll      u2frec.dll
	  ds16gt.dll       ODBCJI32.DLL     u2frtf.dll
	  ds32gt.dll       ODBCJT32.DLL     u2fsepv.dll
	  mci32.ocx        odbcstf.dll      u2ftext.dll
	  mfc40.dll        ODBCTL32.DLL     u2fwks.dll
	  mscomm32.ocx     P2BBND.DLL       u2fxls.dll
	  mscpxl32.dll     p2bdao.dll       vbajet32.dll
	  msmapi32.ocx     p2ctdao.dll      vbskco32.dll
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbtool kbVBp400 kbVBp500 kbGrpDSVB kb32bitOnly 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500 kbVB400Search kbVB400
	Version           : :4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
