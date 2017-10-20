---
layout: page
title: "Q194387: FIX: Handle Leak in ODBC Driver/OLE DB Provider"
permalink: /kb/194/Q194387/
---

## Q194387: FIX: Handle Leak in ODBC Driver/OLE DB Provider

{% raw %}

	Article: Q194387
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.0,Build 2.573.2927
	Operating System(s): 
	Keyword(s): kbDatabase kbDriver kbODBC kbOLEDB kbOracle kbProvider kbGrpDSVCDB kbGrpDSMDAC kbDSuppo
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.5 Build 2.573.2927 
	- Microsoft OLE DB Provider for Oracle, version 2.0 
	- Microsoft Data Access Components version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Both the Microsoft ODBC Driver for Oracle, version 2.573.2927, and the Microsoft
	OLE DB Provider for Oracle, version 2.0.3002.15, shipping with the Microsoft
	Data Access Components (MDAC) version 2.0 have handle leaks, which lead to
	memory leaks. MDAC version 2.0 components are included both in the Data Access
	2.0 Software Development Kit (SDK) as well as Visual Studio version 6.0.
	
	
	
	CAUSE
	=====
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	RESOLUTION
	==========
	
	The Oracle ODBC Driver, version 2.573.2927, and the Oracle OLE DB Provider,
	version 2.0.3002.15, were both fixed with the release of the MDAC version 2.1
	components. Please install MDAC version 2.1 if you are experiencing the handle
	leak. If you cannot upgrade to MDAC version 2.1 you can still install the ODBC
	Driver fix mentioned in this article. You must upgrade to MDAC version 2.1 if
	you are using the OLE DB Provider for Oracle.
	
	The fix contains a patched version of the Microsoft Oracle ODBC Driver. At this
	time, it does not contain a patched version of the Oracle OLE DB Provider.
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	  Date        Time        Version        Size    File name    Platform
	  --------------------------------------------------------------------
	  09-25-1998 12:41:42 PM  2.573.3002.24  138,512 msorcl32.dll Windows
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	Installation Instructions
	-------------------------
	
	1. Extract the files into a new directory.
	
	2. Locate the Msorcl32.dll file on your computer.
	
	3. Copy the new .dll files (created by unzipping the files) to the Windows
	  system directory.
	
	4. Register the .dll files using Regsvr32.exe (provided with the patch) using
	  the following syntax:
	
	  regsvr32 <dll name.dll>
	
	  You also need to register the Msorcl32.dll file.
	
	5. Reboot the system.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	
	Additional query words: oracle memory leak
	
	======================================================================
	Keywords          : kbDatabase kbDriver kbODBC kbOLEDB kbOracle kbProvider kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC200 kbMDAC210fix kbMDAC250 kbMDACNoSweep 
	Technology        : kbAudDeveloper kbODBCSearch kbOLEDBSearch kbMDACSearch kbMDAC200 kbODBCOracle25732927 kbOLEDBProvOracle200 kbOLEDBProvSearch kbODBCOracle250Search
	Version           : :2.0,Build 2.573.2927
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
