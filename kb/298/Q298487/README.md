---
layout: page
title: "Q298487: BUG: Localized Versions of CAB Files for Msjint35.dll Missing"
permalink: /kb/298/Q298487/
---

## Q298487: BUG: Localized Versions of CAB Files for Msjint35.dll Missing

	Article: Q298487
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbwizard kbAppSetup kbDeployment kbIntl kbVBp600bug kbLocalization kbGrpDSVB kbDSupport
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you download a Visual Basic 6.0 Internet Package that has a reference to
	the Data Access Objects (DAO) 3.51 Object library, a File Download dialog box
	may appear. This can occur if you use the Package and Deployment Wizard (PDW) to
	create an Internet Download Package and if you target a Japanese, Korean,
	Simplified Chinese, Traditional Chinese, French, German, Italian, or Spanish
	platform.
	
	CAUSE
	=====
	
	The File Download dialog box appears because a dependent dynamic-link library
	(DLL) file is missing, such as the localized version of MSJint35.dll, version
	3.51.0623. The CAB file that contains this DLL is not on the default Web site
	(http://activex.microsoft.com/controls/vb6). The following list includes those
	CAB files that are missing for the indicated languages:
	
	+------------------------------------+
	| Language            | CAB File     | 
	+------------------------------------+
	| Japanese            | JtResJP.cab  | 
	+------------------------------------+
	| Korean              | JtResKO.cab  | 
	+------------------------------------+
	| Simplified Chinese  | JtResCHS.cab | 
	+------------------------------------+
	| Traditional Chinese | JtResCHT.cab | 
	+------------------------------------+
	| French              | JtResFR.cab  | 
	+------------------------------------+
	| German              | JtResDE.cab  | 
	+------------------------------------+
	| Italian             | JtResIT.cab  | 
	+------------------------------------+
	| Spanish             | JtResES.cab  | 
	+------------------------------------+
	
	NOTE: The CAB file that contains the English version of MSJint35.dll,
	JtResENU.cab, is available from the default Web site.
	
	RESOLUTION
	==========
	
	There are several ways to work around this problem.
	
	Method 1:
	
	Use the Package and Deployment Wizard (PDW) to create an Internet Download
	Package, and include the missing file, MSJint35.dll, in the project CAB file
	instead of pointing to the Microsoft Web site as follows:
	
	1. On the File Source page of the PDW, in the Files drop-down list box, click
	  MSJint35.dll, and then click "Include in this cab".
	
	2. Click Next, and finish creating the package.
	
	If you add a reference to Microsoft DAO 3.51 Object Library in your project,
	MSJint35.dll is included automatically.
	
	Method 2:
	
	Create a CAB file that contains MSJint35.dll, and download this file from an
	alternate Web site as follows:
	
	1. Create an information (INF) file that contains information about which files
	  an ActiveX component depends on (dependency files), where to get copies of
	  those files, and how to install those files. To create the INF file, copy and
	  paste the following code into a text editor such as Notepad:
	
	  ; INF file for MSJINT35.dll
	
	  [DefaultInstall]
	  CopyFiles=install.files
	  RegisterOCXs=RegisterFiles
	
	  [DestinationDirs]
	  install.files=11
	
	  [install.files]
	  MSJINT35.DLL=MSJINT35.DLL
	
	  [RegisterFiles]
	  %11%\MSJINT35.DLL
	
	  [MSJINT35.DLL]
	  file-win32-x86=thiscab
	  RegisterServer=Yes
	  FileVersion=3,51,623,0
	
	  [version]
	  signature="$CHICAGO$"
	  AdvancedINF=2.0
	
	  [SourceDisksNames]
	  1="default",,1
	
	2. Save the file with a name from the list below. Use an INF file name that
	  corresponds to the language platform that you are targeting.
	
	  +-------------------------------------+
	  | Language            | INF File Name | 
	  +-------------------------------------+
	  | Japanese            | JtResJP.inf   | 
	  +-------------------------------------+
	  | Korean              | JtResKO.inf   | 
	  +-------------------------------------+
	  | Simplified Chinese  | JtResCHS.inf  | 
	  +-------------------------------------+
	  | Traditional Chinese | JtResCHT.inf  | 
	  +-------------------------------------+
	  | French              | JtResFR.inf   | 
	  +-------------------------------------+
	  | German              | JtResDE.inf   | 
	  +-------------------------------------+
	  | Italian             | JtResIT.inf   | 
	  +-------------------------------------+
	  | Spanish             | JtResES.inf   | 
	  +-------------------------------------+
	
	3. Obtain a copy of the correct version of MSJint32.dll from the localized
	  version of the Visual Basic 6.0 CD or from the International Package and
	  Deployment Kit (IPDK). Make sure that the version of MSJint35.dll is
	  3.51.0623 and that the language corresponds to your locale (for example,
	  Japanese).
	
	For additional information on the IPDW and download information, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q236404 INFO: Microsoft Visual Basic 6.0 International Package and Deployment
	  Kit
	
	4. Place the correct version of MSJint32.dll in the same folder as your INF
	  file. Turn off the Read-Only attribute, if it is set.
	
	5. Create a Diamond Directive File (DDF) to make the CAB file. The DDF file is a
	  text file that contains specific information that is required to compress
	  your files into a cabinet file. The DDF file is not placed in the CAB file.
	
	  In a text editor such as Notepad, create a new DDF file named
	  JtRes<lang>.ddf (for example, JtResJP.ddf for Japanese), paste the
	  following code, and save the DDF file in the same folder as the INF file:
	
	  .OPTION EXPLICIT
	  .Set Cabinet=on
	  .Set Compress=on
	  .Set MaxDiskSize=CDROM
	  .Set ReservePerCabinetSize=6144
	  .Set DiskDirectoryTemplate=
	  .Set CompressionType=MSZIP
	  .Set CompressionLevel=7
	  .Set CompressionMemory=21
	  .Set CabinetNameTemplate="JtResJP.CAB"
	  "JtResJP.INF"
	  "msjint35.dll"
	
	6. If you are not targeting Japanese platforms, change the name of the CAB and
	  INF files in the following lines:
	
	  .Set CabinetNameTemplate="JtResJP.CAB"
	  "JtResJP.INF"
	
	  Use the CAB file name that corresponds to the language platform that you are
	  targeting:
	
	  +-------------------------------------+
	  | Language            | CAB File Name | 
	  +-------------------------------------+
	  | Japanese            | JtResJP.cab   | 
	  +-------------------------------------+
	  | Korean              | JtResKO.cab   | 
	  +-------------------------------------+
	  | Simplified Chinese  | JtResCHS.cab  | 
	  +-------------------------------------+
	  | Traditional Chinese | JtResCHT.cab  | 
	  +-------------------------------------+
	  | French              | JtResFR.cab   | 
	  +-------------------------------------+
	  | German              | JtResDE.cab   | 
	  +-------------------------------------+
	  | Italian             | JtResIT.cab   | 
	  +-------------------------------------+
	  | Spanish             | JtResES.cab   | 
	  +-------------------------------------+
	
	  Use the INF file name that corresponds to the language platform that you are
	  targeting:
	
	  +-------------------------------------+
	  | Language            | INF File Name | 
	  +-------------------------------------+
	  | Japanese            | JtResJP.inf   | 
	  +-------------------------------------+
	  | Korean              | JtResKO.inf   | 
	  +-------------------------------------+
	  | Simplified Chinese  | JtResCHS.inf  | 
	  +-------------------------------------+
	  | Traditional Chinese | JtResCHT.inf  | 
	  +-------------------------------------+
	  | French              | JtResFR.inf   | 
	  +-------------------------------------+
	  | German              | JtResDE.inf   | 
	  +-------------------------------------+
	  | Italian             | JtResIT.inf   | 
	  +-------------------------------------+
	  | Spanish             | JtResES.inf   | 
	  +-------------------------------------+
	
	7. Make sure that the MSJint35.dll, JtRes<lang>.inf, and
	  JtRes<lang>.ddf files are in the same folder, and run the MakeCab.exe
	  utility. For example, if you are targeting the Japanese platform, type the
	  following command at a command prompt:
	
	  "makecab /f jtresjp.ddf" (without the quotation marks)
	
	  This makes the CAB file in the folder where you are currently running.
	
	8. Use PDW to create the Internet Download Package. On the Files Source page of
	  PDW, in the Files drop-down list box, click MSJint35.dll, click "Download
	  from alternate Web site", and type the location of the CAB file in the text
	  box. You can type a Universal Naming Convention (UNC) or Uniform Resource
	  Locator (URL) for the location of the CAB file that you created in step 4.
	  Complete the wizard.
	
	For a more permanent solution, you can modify the VB6DEP.ini file. This INI file
	stores the default locations of the CAB files. If you change VB6DEP.ini
	according to the following steps, you can use the "Download from Microsoft Web
	site" default setting for MSJint35.dll on the File Source page of the Package
	and Deployment Wizard (PDW) when you point to the location of the CAB file that
	you created in the preceding steps. To do this, follow these steps:
	
	1. Close the Visual Basic 6.0 Integrated Development Environment (IDE) and PDW
	  before you change the VB6DEP.ini.
	
	2. Make a backup copy of VB6DEP.ini before you proceed.
	
	3. In a text editor such as Notepad, open VB6DEP.ini.
	
	4. Change the location of the CABDefaultURL in the language-specific section to
	  point to the location of the CAB file that you created in step 4 of the
	  preceding steps. For example, if you are creating a download for a Japanese
	  platform, change the [MSJInt35.dll <0011>] section from
	
	  [MSJInt35.dll <0011>]
	  Dest=$(WinSysPathSysFile)
	  CABFileName=JtResJP.cab
	  CABDefaultURL=http://activex.microsoft.com/controls/vb6
	  CABINFFile=JtResJP.inf
	
	  to:
	
	  [MSJInt35.dll <0011>]
	  Dest=$(WinSysPathSysFile)
	  CABFileName=JtResJP.cab
	  CABDefaultURL=http://myhttp.web.site/FolderName
	  CABINFFile=JtResJP.inf
	
	  where http://myhttp.web.site/FolderName is the location of the CAB file.
	
	5. In the preceding example, the [MSJInt35.dll <0011>] section specifies
	  the location of the Japanese CAB file. Use the following table to locate the
	  section that corresponds to the language platform that you are targeting:
	
	  +---------------------------------------------+
	  | Language            | Section Name          | 
	  +---------------------------------------------+
	  | Korean              | [MSJInt35.dll <0012>] | 
	  +---------------------------------------------+
	  | Simplified Chinese  | [MSJInt35.dll <0804>] | 
	  +---------------------------------------------+
	  | Traditional Chinese | [MSJInt35.dll <0404>] | 
	  +---------------------------------------------+
	  | French              | [MSJInt35.dll <000C>] | 
	  +---------------------------------------------+
	  | German              | [MSJInt35.dll <0007>] | 
	  +---------------------------------------------+
	  | Italian             | [MSJInt35.dll <0010>] | 
	  +---------------------------------------------+
	  | Spanish             | [MSJInt35.dll <000A>] | 
	  +---------------------------------------------+
	
	6. Make similar changes in the section of VB6DEP.ini that contains the
	  MSJInt35.dll CAB file information for the language that you are targeting. In
	  these sections, change CABFileName so that it points to the name of the CAB
	  file, and change CABDefaultURL so that it points to the location of the CAB
	  file.
	
	7. Save the changes to VB6DEP.ini. You can now use PDW to create your Internet
	  Download Package and use the default settings for MSJint35.dll.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	On Computer1, which has the Japanese version of Microsoft Windows and the
	Japanese version of Visual Basic 6.0 installed, follow these steps:
	
	1. Create a new ActiveX EXE project named UserDocument1 in Visual Basic.
	
	2. From the Project menu, click References. From the References dialog box,
	  select the "Microsoft DAO 3.51 Object Library" check box, and then click OK.
	
	3. Use the default setting to create an Internet Package.
	
	On Computer2, which has the Japanese version of Windows, download the project as
	follows:
	
	1. Temporarily enable the "Download unsigned ActiveX control" security setting
	  as follows:
	
	  a. In Microsoft Internet Explorer, on the Tools menu, click Internet Options.
	
	  b. On the Security tab, click the appropriate zone, and then click Custom
	     Level.
	
	  c. Under "Download unsigned ActiveX controls", click Enable.
	
	2. Run the Project1.htm file that is located on Computer1.
	
	3. Click UserDocument1.VBD. A security warning Microsoft Remote Automation
	  Client dialog box appears.
	
	4. Click Yes to install and run the client. The File Download dialog box appears
	  for UserDocument1.VBD.
	
	REFERENCES
	==========
	
	For more information about using MakeCab.exe or modifying DDF and INF files, see
	the following MSDN documentation on the ActiveX Software Development Kit (SDK):
	
	  http://msdn.microsoft.com/workshop/misc/activexsdk/sdk.asp
	  (http://msdn.microsoft.com/workshop/misc/activexsdk/sdk.asp)
	
	For additional information on CAB files, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q191212 HOWTO: Modify and Rebuild .CAB Files Built with PDW
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbAppSetup kbDeployment kbIntl kbVBp600bug kbLocalization kbGrpDSVB kbDSupport kbbuglist
	Component         : Component
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
