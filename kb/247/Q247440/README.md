---
layout: page
title: "Q247440: HOWTO: Rename Jet 3.51 ODBC Drivers in Windows 2000"
permalink: /kb/247/Q247440/
---

## Q247440: HOWTO: Rename Jet 3.51 ODBC Drivers in Windows 2000

	Article: Q247440
	Product(s): Microsoft Windows NT
	Version(s): 2000
	Operating System(s): 
	Keyword(s): kbDatabase kbDBase kbDriver kbJET kbOSWin2000 kbODBC kbVBp kbvfp kbXBase kbGrpDSVBDB kb
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Setting Up the Jet 3.5 ODBC Drivers
	
	- Copying the Files
	- Making System Links
	- Creating the Registry File
	- Merging the Registry File
	- Using the Drivers
	
	- REFERENCES
	
	SUMMARY
	=======
	
	Microsoft Windows 2000 comes with MDAC 2.5 preinstalled. The ODBC driver for
	Microsoft Access 2000 in MDAC 2.5 provides additional functionality over the
	3.51 versions of the driver, but some previous functionality was removed.
	Existing applications that use the ODBC driver for Microsoft Access
	automatically use the new drivers. Applications can fail if they require
	functionality that the new ODBC drivers do not provide.
	
	This article provides a method to install the Jet 3.51 ODBC drivers on your
	Microsoft Windows 2000 computer. After the Jet 3.51 driver is installed, it must
	be renamed which in turn enables Jet 3.51 and 4.0 to simultaneously exist on a
	Windows 2000 computer. After completing this installation, applications may have
	access to both Jet 3.51 and 4.0 drivers. Microsoft provides programming examples
	for illustration only, without warranty either expressed or implied, including,
	but not limited to, the implied warranties of merchantability and/or fitness for
	a particular purpose. This article assumes that you are familiar with the
	programming language being demonstrated and the tools used to create and debug
	procedures. Microsoft support professionals can help explain the functionality
	of a particular procedure, but they will not modify these examples to provide
	added functionality or construct procedures to meet your specific needs. If you
	have limited programming experience, you may want to contact a Microsoft
	Certified Partner or the Microsoft fee-based consulting line at (800) 936-5200.
	For more information about Microsoft Certified Partners, please visit the
	following Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	Upgrading your Microsoft Access ODBC driver from version 3.5 to version 4.0
	provides your applications a number of benefits, including the ability to read
	and write Jet 4.0 format MDB files. However, if your application uses the IISAM
	drivers, some functionality is lost, which could result in your application not
	working.
	
	The lost functionality includes dropping the FoxPro IISAM and making the dBase
	and Paradox IISAM drivers give read-only access to your files.
	
	For new application development, there are several possible workarounds:
	
	- Use the FoxPro ODBC driver. It provides more functionality than the IISAM
	  driver, although you cannot use the Seek method.
	
	- The dBase and Paradox IISAMs do enable updating files if the Borland Database
	  Engine (BDE) is installed. However, this must be licensed from Inprise.
	
	- Use the steps outlined in this article to install the Jet 3.51 ODBC and Jet 4
	  ODBC drivers simultaneously on your Microsoft Windows 2000 computer.
	
	  NOTE: This last alternative only works if using Windows 2000 and does not work
	  if using Windows NT 4.0 or Windows 95 or 98.
	
	
	Setting Up the Jet 3.5 ODBC Drivers
	-----------------------------------
	
	The steps described below enable your ODBC applications that use Jet 3.5 and Jet
	4.0 to co-exist and run simultaneously on a Windows 2000 computer. It is assumed
	that Jet 3.5 and Jet 4.0 are both installed on the computer and the ODBC driver
	is currently version 4.0.
	
	If you need to get Jet 3.5 on the computer, you can install any DAO 3.5
	application that uses the appropriate IISAM drivers, or you can copy and
	register the files outlined in the following Knowledge Base articles:
	
	  Q240377 HOWTO: Insuring Jet 3.5 Is Installed Correctly
	
	Applications that use the Jet 3.5 ODBC drivers have to use a different DSN or
	connect string than ones that use the default Microsoft Access (Jet 4.0) ODBC
	driver.
	
	The ODBC drivers on your system are defined by Registry keys under:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\ODBC
	
	This article provides the following:
	
	- A list of files to copy to your Windows 2000 computers.
	
	- A program to build some links to enable the ODBC drivers to function
	  correctly outside the system and application directories.
	
	- A file to register them with a new driver name. In this case, the driver
	  names have the words "Jet 351" inserted into them.
	
	Copying the Files
	-----------------
	
	1. Locate the following files on your Visual Basic 5.0 or Visual Basic 6.0
	  (pre-SP3) CD. They are in the folder \OS\System on CD 1 of the Visual Studio
	  98 CDs. For example:
	
	  ODBCJT32.DLL
	  ODBCJI32.DLL
	  ODBCTL32.DLL
	  ODDBSE32.DLL
	  ODEXL32.DLL
	  ODFOX32.DLL
	  ODPDX32.DLL
	  ODTEXT32.DLL
	
	2. Copy the files to a directory, such as C:\JET351ODBC, on your Windows 2000
	  computer. The directory must be on the same drive as your Windows 2000
	  installation. If it is on a different drive, the system links do not build
	  correctly in the next step.
	
	Making System Links
	-------------------
	
	The ODBC driver looks in the directory where it is located for certain system
	files. However, you cannot just copy these files into the directory if it is
	different than the application directory because the files might conflict with
	ones of the same name that are loaded by the host application.
	
	Windows 2000 introduces the concept of Hard Links, which enable you to create a
	file in the application directory that points to a file in another directory.
	This is different than the .lnk files used to redirect applications. The hard
	link ensures that only one copy of the DLL is loaded into the process space.
	
	The following Visual Basic code demonstrates how to create the links required by
	the ODBC driver:
	
	1. In Visual Basic, create a new Standard EXE. Form1 is created by default.
	
	2. On the Project menu, select Add Module, then add a code module. Module1 is
	  created by default.
	
	3. From the Project menu, select Project1 Properties. From the Startup Object
	  drop-down list, select Sub Main. Click OK.
	
	4. Paste the following code into the General Declarations section of Module1:
	
	  Option Explicit
	
	  Private Declare Function CreateHardLink Lib "KERNEL32" Alias "CreateHardLinkA" _
	         (ByVal LinkPath As String, _
	          ByVal FilePath As String, _
	          ByVal Security As Long) As Long
	
	  Private Const SysDir As String = "c:\winnt\system32\"
	  Private Const ODBCDir As String = "c:\jet351odbc\"
	
	  Sub Main()
	    CreateLink "OLE32.DLL"
	    CreateLink "MSJTER35.DLL"
	    CreateLink "VBAJET32.DLL"
	    CreateLink "EXPSRV.DLL"
	  End Sub
	
	  Private Sub CreateLink(FileName As String)
	  Dim Result As Long
	    Result = CreateHardLink(ODBCDir & FileName, SysDir & FileName, 0)
	    If Result = 0 Then
	      Debug.Print "Create Hard link failed on file " & FileName & " with error " & Err.LastDllError
	    End If
	  End Sub
	
	5. If necessary, change the directory names and drive letters to match your
	  particular computer.
	
	6. Run the Visual Basic project. You only need to run this code one time to
	  permanently create the links.
	
	Creating the Registry File
	--------------------------
	
	The following steps enter the Jet ODBC 3.51 file locations into the Windows
	Registry:
	
	1. Use the Windows Notepad applet to create a new Text document.
	
	2. Copy the following entries and paste them into the new Text document:
	
	Windows Registry Editor Version 5.00
	
	[HKEY_LOCAL_MACHINE\SOFTWARE\ODBC\ODBCINST.INI]
	
	[HKEY_LOCAL_MACHINE\SOFTWARE\ODBC\ODBCINST.INI\Microsoft Jet 351 Access Driver (*.mdb)]
	"UsageCount"=dword:0000000c
	"Driver"="C:\\Jet351ODBC\\odbcjt32.dll"
	"Setup"="C:\\Jet351ODBC\\odbcjt32.dll"
	"APILevel"="1"
	"ConnectFunctions"="YYN"
	"DriverODBCVer"="02.50"
	"FileUsage"="2"
	"FileExtns"="*.mdb"
	"SQLLevel"="0"
	"s"="YYN"
	"CPTimeout"="60"
	
	[HKEY_LOCAL_MACHINE\SOFTWARE\ODBC\ODBCINST.INI\Microsoft Jet 351 dBase Driver (*.dbf)]
	"UsageCount"=dword:0000000b
	"Driver"="C:\\Jet351ODBC\\odbcjt32.dll"
	"Setup"="C:\\Jet351ODBC\\oddbse32.dll"
	"APILevel"="1"
	"ConnectFunctions"="YYN"
	"DriverODBCVer"="02.50"
	"FileUsage"="1"
	"FileExtns"="*.dbf,*.ndx,*.mdx"
	"SQLLevel"="0"
	"CPTimeout"="<not pooled>"
	
	[HKEY_LOCAL_MACHINE\SOFTWARE\ODBC\ODBCINST.INI\Microsoft Jet 351 Excel Driver (*.xls)]
	"UsageCount"=dword:00000009
	"Driver"="C:\\Jet351ODBC\\odbcjt32.dll"
	"Setup"="C:\\Jet351ODBC\\odexl32.dll"
	"APILevel"="1"
	"ConnectFunctions"="YYN"
	"DriverODBCVer"="02.50"
	"FileUsage"="1"
	"FileExtns"="*.xls"
	"SQLLevel"="0"
	"CPTimeout"="<not pooled>"
	
	[HKEY_LOCAL_MACHINE\SOFTWARE\ODBC\ODBCINST.INI\Microsoft Jet 351 FoxPro Driver (*.dbf)]
	"UsageCount"=dword:00000008
	"Driver"="C:\\Jet351ODBC\\odbcjt32.dll"
	"Setup"="C:\\Jet351ODBC\\odfox32.dll"
	"APILevel"="1"
	"ConnectFunctions"="YYN"
	"DriverODBCVer"="02.50"
	"FileUsage"="1"
	"FileExtns"="*.dbf,*.cdx,*.idx,*.ftp"
	"SQLLevel"="0"
	"CPTimeout"="<not pooled>"
	
	[HKEY_LOCAL_MACHINE\SOFTWARE\ODBC\ODBCINST.INI\Microsoft Jet 351 Paradox Driver (*.db )]
	"UsageCount"=dword:00000009
	"Driver"="C:\\Jet351ODBC\\odbcjt32.dll"
	"Setup"="C:\\Jet351ODBC\\odpdx32.dll"
	"APILevel"="1"
	"ConnectFunctions"="YYN"
	"DriverODBCVer"="02.50"
	"FileUsage"="1"
	"FileExtns"="*.db"
	"SQLLevel"="0"
	"CPTimeout"="<not pooled>"
	
	[HKEY_LOCAL_MACHINE\SOFTWARE\ODBC\ODBCINST.INI\Microsoft Jet 351 Text Driver (*.txt; *.csv)]
	"UsageCount"=dword:0000000a
	"Driver"="C:\\Jet351ODBC\\odbcjt32.dll"
	"Setup"="C:\\Jet351ODBC\\odtext32.dll"
	"APILevel"="1"
	"ConnectFunctions"="YYN"
	"DriverODBCVer"="02.50"
	"FileUsage"="1"
	"FileExtns"="*.,*.asc,*.csv,*.tab,*.txt,*.csv"
	"SQLLevel"="0"
	"CPTimeout"="<not pooled>"
	
	[HKEY_LOCAL_MACHINE\SOFTWARE\ODBC\ODBCINST.INI\ODBC Drivers]
	"Microsoft Jet 351 Access Driver (*.mdb)"="Installed"
	"Microsoft Jet 351 dBase Driver (*.dbf)"="Installed"
	"Microsoft Jet 351 Excel Driver (*.xls)"="Installed"
	"Microsoft Jet 351 FoxPro Driver (*.dbf)"="Installed"
	"Microsoft Jet 351 Text Driver (*.txt; *.csv)"="Installed"
	"Microsoft Jet 351 Paradox Driver (*.db )"="Installed"
	
	3. If necessary, change the directory names and drive letters to match the ones
	  on your system.
	
	4. Save to a file with a .reg extension, such as Jet351ODBC.reg.
	
	Merging the Registry File
	-------------------------
	
	There are several ways to merge the newly created REG file into the Windows NT
	Registry:
	
	- Double-click on the file.
	
	- Alternate-click on the file and choose Merge.
	
	- Use the Windows REGEDIT program.
	
	Note that you only need to merge the REG file once to permanently enter the
	information into the Registry.
	To merge the file using the Windows REGEDIT program:
	
	1. On the Windows 2000 Start menu, choose Run.
	
	2. In the Open: text box, type:
	
	"C:\WinNT\RegEdit.exe" (without the quotation marks)
	
	3. On the Registry menu, choose Import Registry File. Browse to the newly
	  created .reg file, select it, then click Open. A message box appears that
	  displays the .reg file information that was entered into the registry.
	
	Using the Drivers
	-----------------
	
	Once you have created the hard links and entered the information into the
	registry, you can use the ODBC Driver Manager to create DSNs with the renamed
	driver. You can also use DSN-less connections in your application by referencing
	the renamed driver. The driver names are:
	
	  Microsoft Jet 351 Access Driver (*.mdb)
	  Microsoft Jet 351 dBase Driver (*.dbf)
	  Microsoft Jet 351 Excel Driver (*.xls)
	  Microsoft Jet 351 FoxPro Driver (*.dbf)
	  Microsoft Jet 351 Text Driver (*.txt; *.csv)
	  Microsoft Jet 351 Paradox Driver (*.db )
	
	You can compile the application and use it on any other Windows 2000 computer
	that has the necessary links and registry information. If you are going to
	redistribute the application to a Windows 2000 computer that has not had the
	changes made, you have to create a patch program to perform the three steps
	described above, including detecting the drive and directory that the operating
	system is installed on and dynamically using this data to point to the correct
	directories.
	
	REFERENCES
	==========
	
	Starting with Microsoft Data Access Components (MDAC) version 2.6, MDAC no longer
	contains the following Jet components:
	
	- Microsoft Jet
	- Microsoft Jet OLE DB Provider
	- ODBC Desktop Database Drivers
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q239114 ACC2000: Updated Version of Microsoft Jet 4.0 Available in Download
	  Center
	
	The "MDAC 2.5 Stack and Windows File Protection" white paper contains a full list
	of the components that are shipped with MDAC 2.5, along with a discussion of
	Windows File Protection. Refer to this white paper for more information about
	the Jet dynamic-link libraries (DLLs) that are included in MDAC 2.5, which are
	no longer a part of MDAC 2.6.
	
	For more information about MDAC 2.5 and Windows File Protection, see the
	following Microsoft Web site:
	
	  http://www.microsoft.com/data/mdacwfp.htm
	
	Microsoft Developer Network topic: CreateHardLink
	
	Additional query words: Installable ISAM
	
	======================================================================
	Keywords          : kbDatabase kbDBase kbDriver kbJET kbOSWin2000 kbODBC kbVBp kbvfp kbXBase kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbMDAC250 kbMDACNoSweep kbAudITPro kbHOWTOmaster 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : :2000
	Issue type        : kbhowto
	
	=============================================================================
	
