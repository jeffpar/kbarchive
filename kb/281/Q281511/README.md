---
layout: page
title: "Q281511: Sample Files for WinNT 4.0 Option Pack Unattended Installation"
permalink: /kb/281/Q281511/
---

## Q281511: Sample Files for WinNT 4.0 Option Pack Unattended Installation

{% raw %}

	Article: Q281511
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0, used with:
	   - the operating system: Microsoft Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides two sample Unattend.txt files that contain all of the
	commonly selected options for configuring Internet Information Server (IIS) and
	other Option Pack components. You must modify these sample files according to
	your desired options and settings.
	
	MORE INFORMATION
	================
	
	The following sample file provides the default Windows NT 4.0 Option Pack
	installation:
	
	  [Version]
	  Signature = "$Windows NT$"
	
	  [Global]
	  ; In K2 setup, Iis.dll will handle this [Global] section and set Setup mode appropriately. 
	  ; You don?t have to worry about this section.
	  ;
	  ; You can specify the mode that Setup runs in.
	  ; Setup takes on the install modes based on the configuration of the target computer.
	  ; Fresh, Maintanence, Upgrade
	  ;
	  ; FreshMode = [ Minimal | Typical | Custom ]
	  ; MaintanenceMode = [ AddRemove | RemoveAll ]
	  ; UpgradeMode = [ UpgradeOnly | AddExtraComps ]
	
	  ; If the computer is in FreshMode, but no "FreshMode=" line is specified,
	   the default value is Typical.
	
	  ; If the computer is in MaintanenceMode, but no "MaintanenceMode=" line is
	  specified, there is no default value 
	  and you receive an error message in the registry.
	  ;(HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Setup\OC Manager\MasterInfs\Errors)
	
	  ; If the computer is in UpgradeMode, but no "UpgradeMode=" line is
	  specified, the default value is UpgradeOnly.
	
	  FreshMode = Typical
	  MaintanenceMode = RemoveAll
	
	  [Components]
	  ;<sub-component name>=[ ON | OFF ]
	  ; This [components] section is valid only when 
	  ;FreshMode = Custom
	  ;MaintanenceMode = AddRemove
	  ;UpgradeMode = AddExtraComps
	
	  ; IIS
	  iis_common = ON
	  iis_inetmgr = ON
	  iis_www = ON
	  iis_ftp = ON
	  iis_htmla=ON
	  iis_w3samp = OFF
	  iis_doc_common = ON
	  iis_doc_ismcore = ON
	  iis_doc_asp = ON
	  iis_doc_sdk = OFF
	  iis_doc_mm = OFF
	
	  ; MTS
	  mts_core=on
	  mts_mmc=on
	  mts_core_docs=on
	  mts_mtsdev=off
	  mts_mtsdev_core=off
	  mts_mtsdev_core_docs=off
	  mts_mtsdev_vbaddin=off
	
	  ; IndexServer components
	  indexsrv_system   = ON
	  indexsrv_language = ON
	  indexsrv_samples  = ON
	  indexsrv_onlinedoc= ON
	  indexsrv_language_english_us = ON
	  indexsrv_language_english_uk       = OFF
	  indexsrv_language_french_french    = OFF
	  indexsrv_language_german_german    = OFF
	  indexsrv_language_italian_italian  = OFF
	  indexsrv_language_swedish_default  = OFF
	  indexsrv_language_spanish_modern   = OFF
	  indexsrv_language_dutch_dutch      = OFF
	  indexsrv_language_japanese_default = OFF
	
	  ; FrontPage Extensions
	  fp_extensions=ON
	  fp_vid_deploy=OFF
	
	  ; Cert Server
	  certsrv = OFF
	  certsrv_client = OFF
	  certsrv_server = OFF
	  certsrv_doc = OFF
	
	  ; DAC
	  DAC_ADO_CORE = ON
	  DAC_DRV_BRAZOS = ON
	  DAC_DRV_SQLSRV = ON
	  DAC_DRV_ORACLE = ON
	  DAC_ADO_DOC = ON
	  DAC_RDS_11 = OFF
	  DAC_RDS_CORE ON
	  DAC_RDS_DOC ON
	  DAC_RDS_SAMPLE = ON
	
	  ; Site Analyst
	  PostAcc = OFF
	  WebPost = OFF
	  SA2IIS = OFF
	  UsageAnalyst = OFF
	
	  ; SMTP and NNTP
	  iis_smtp = ON
	  iis_smtp_docs = ON
	  iis_nntp = OFF
	  iis_nntp_docs = OFF
	
	  ; WSH
	  wsh_core = ON
	
	  ; Caesars
	  iisdbg = ON
	
	  ; Rasics
	  COMMONDOC = OFF
	  CMAKDOC = OFF
	  CPSDOC = OFF
	  CIASDOC = OFF
	  CMAKPROG = OFF
	  CPSAD = OFF
	  CPSSRV = OFF
	  CIASOCM = OFF
	
	  ; MSMQ requires the Msmqinst.ini file.
	  Msmq_Server_Core = OFF
	  Msmq_Admin = OFF
	  Msmq_SDK = OFF
	  Msmq_Doc = OFF
	
	  [iis]
	  ; Each major component may have its own private data.
	  ;Path =c:\install\path
	  PathFTPRoot=C:\Inetpub\ftproot
	  PathWWWRoot=C:\Inetpub\wwwroot
	  PathPROGRoot=C:\program files
	
	  [mts_core]
	  Path="D:\Program Files\Mts"
	  ;USERID="Interactive User"
	  ;PASSWORD=""
	
	  [indexsrv]
	  ;CiCatalogPath=
	
	  [certsrv_client]
	  sharedfolder = C:\Shared
	
	  [certsrv_server]
	  name = my server name
	  organization = my test org
	  organizationalunit = my organizational unit
	  locality = my locality
	  State = my state
	  country = US
	
	The following sample file provides a minimal Windows NT 4.0 option pack
	installation with only IIS:
	
	  [Version]
	  Signature = "$Windows NT$"
	
	  [Global]
	  ; In K2 setup, Iis.dll will handle this [Global] section and set Setup mode appropriately. 
	  ; You don?t have to worry about this section.
	  ;
	  ; You can specify the mode that Setup runs in.
	  ; Setup takes on the install modes based on the configuration of the target computer.
	  ; Fresh, Maintanence, Upgrade
	  ;
	  ; FreshMode = [ Minimal | Typical | Custom ]
	  ; MaintanenceMode = [ AddRemove | RemoveAll ]
	  ; UpgradeMode = [ UpgradeOnly | AddExtraComps ]
	
	  ; If the computer is in FreshMode, but no "FreshMode=" line is specified,
	  the default value is Typical.
	
	  ; If the computer is in MaintanenceMode, but no "MaintanenceMode=" line is
	  specified, there is no default value 
	  and you receive an error message in the registry. 
	  ;(HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Setup\OC Manager\MasterInfs\Errors)
	
	  ; If the computer is in UpgradeMode, but no "UpgradeMode=" line is
	  specified, the default value is UpgradeOnly.
	
	  FreshMode = Custom
	  MaintanenceMode = AddRemove
	  UpgradeMode = AddExtraComps
	
	  [Components]
	  ;<sub-component name>=[ ON | OFF ]
	  ; This [components] section is valid only when 
	
	  ; iis
	  iis_common = ON
	  iis_inetmgr = ON
	  iis_www = ON
	  iis_ftp = OFF
	  iis_htmla=OFF
	  iis_w3samp = OFF
	  iis_doc_common = OFF
	  iis_doc_ismcore = OFF
	  iis_doc_asp = OFF
	  iis_doc_sdk = OFF
	  iis_doc_mm = OFF
	
	  ; MTS
	  mts_core = ON
	  mts_mmc = ON
	  mts_core_docs = ON
	  mts_mtsdev = ON
	  mts_mtsdev_core = ON
	  mts_mtsdev_core_docs = ON
	  mts_mtsdev_vbaddin = ON
	
	  ; IndexServer components
	  indexsrv_system   = OFF
	  indexsrv_language = OFF
	  indexsrv_samples  = OFF
	  indexsrv_onlinedoc= OFF
	  indexsrv_language_english_us = OFF
	  indexsrv_language_english_uk       = OFF
	  indexsrv_language_french_french    = OFF
	  indexsrv_language_german_german    = OFF
	  indexsrv_language_italian_italian  = OFF
	  indexsrv_language_swedish_default  = OFF
	  indexsrv_language_spanish_modern   = OFF
	  indexsrv_language_dutch_dutch      = OFF
	  indexsrv_language_japanese_default = OFF
	
	  ; FrontPage Extensions
	  fp_extensions = OFF
	  fp_vid_deploy = OFF
	
	  ; Cert Server
	  certsrv = OFF
	  certsrv_client = OFF
	  certsrv_server = OFF
	  certsrv_doc = OFF
	
	  ; DAC
	  DAC_ADO_CORE = ON
	  DAC_DRV_BRAZOS = ON
	  DAC_DRV_SQLSRV = ON
	  DAC_DRV_ORACLE = ON
	  DAC_ADO_DOC = ON
	  DAC_RDS_11 = ON
	  DAC_RDS_CORE = ON
	  DAC_RDS_DOC = ON
	  DAC_RDS_SAMPLE = ON
	
	  ; Site Analyst
	  PostAcc = OFF
	  WebPost = OFF
	  SA2IIS = OFF
	  UsageAnalyst = OFF
	
	  ; SMTP and NNTP
	  iis_smtp = OFF
	  iis_smtp_docs = OFF
	  iis_nntp = OFF
	  iis_nntp_docs = OFF
	
	  ; WSH
	  wsh_core = OFF
	
	  ; Caesars
	  iisdbg = ON
	
	  ; Rasics
	  COMMONDOC = OFF
	  CMAKDOC = OFF
	  CPSDOC = OFF
	  CIASDOC = OFF
	  CMAKPROG = OFF
	  CPSAD = OFF
	  CPSSRV = OFF
	  CIASOCM = OFF
	
	  ; MSMQ requires the Msmqinst.ini file
	  Msmq_Server_Core = OFF
	  Msmq_Admin = OFF
	  Msmq_SDK = OFF
	  Msmq_Doc = OFF
	
	  [iis]
	  ; Each major component may have its own private data.
	  ;Path =c:\install\path
	  PathFTPRoot=C:\Inetpub\ftproot
	  PathWWWRoot=C:\Inetpub\wwwroot
	  PathPROGRoot=C:\program files
	
	  [mts_core]
	  Path="D:\Program Files\Mts"
	  ;USERID="Interactive User"
	  ;PASSWORD=""
	
	  [indexsrv]
	  ;CiCatalogPath=
	
	  [certsrv_client]
	  sharedfolder = C:\Shared
	
	  [certsrv_server]
	  name = my server name
	  organization = my test org
	  organizationalunit = my organizational unit
	  locality = my locality
	  State = my state
	  country = US
	
	To create an attended installation of the Windows NT 4.0 Option Pack, use the
	following command line:
	
	  <path to the Windows NT Option Pack>\setup.exe /u:<path to setup
	  text file>
	
	where path to the Windows NT Option Pack is the full path to the Setup.exe file
	for the Windows NT Option Pack; /u: instructs the Windows NT Option Pack to
	install in an unattended, or silent, mode; and path to setup text file is the
	full path information to the Setup text file that is necessary for the
	unattended installation.
	
	REFERENCES
	----------
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q202139 HOWTO: Create an Unattended MSMQ Installation From the Windows NT 4.0
	  Option Pack
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch
	Version           : :4.0
	Issue type        : kbhowto
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
