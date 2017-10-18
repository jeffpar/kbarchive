---
layout: page
title: "Q231812: HOWTO: Programmatically Set Compatibility Level of SQL ODBC Drv."
permalink: kb/231/Q231812/
---

## Q231812: HOWTO: Programmatically Set Compatibility Level of SQL ODBC Drv.

	Article: Q231812
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0,3.0b,5.0,5.0a,6.0,6.0 SP3
	Operating System(s): 
	Keyword(s): KbClientServer kbSQL kbvfp300b kbvfp500a kbvfp600 kbGrpDSFox kbMDAC250 kbSQLProg
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0, 6.0 SP3 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to set the compatibility level of version 3.70.0623
	of the SQL Server ODBC driver (Sqlsrv32.dll) to SQL Server 6.5 compatibility
	mode.
	
	MORE INFORMATION
	================
	
	Version 3.70 of the SQL Server ODBC driver ships with Microsoft Data Access
	Components (MDAC) 2.1, and is installed as part of Visual FoxPro 6.0 Service
	Pack 3. This driver exposes new globally unique identifier (GUID) and Unicode
	data types when connecting to SQL Server 7.0. As a result, there are some
	changes in the default behavior of the ODBC driver, which may affect how data is
	retrieved and or displayed. The default compatibility level of the SQL Server
	ODBC driver is for SQL Server 7.0 compatibility.
	
	The compatibility level of the SQL Server ODBC driver does not need to be set for
	applications connecting to earlier versions of SQL Server using the 3.70 driver.
	This driver automatically runs in the appropriate compatibility mode when
	connecting to earlier versions of SQL Server. Likewise, the compatibility level
	does not need to be set for applications using earlier versions of the SQL
	Server ODBC driver connecting to SQL Server 7.0. SQL Server 7.0 automatically
	treats any application using the earlier drivers as a 6.5-level application.
	
	SQL Server 7.0 provides the odbccmpt utility, which can be used to enable SQL
	Server version 6.5 ODBC compatibility for specific applications.
	
	The compatibility level setting of the SQL Server ODBC driver is stored in the
	following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\MSSQLServer\Client\ODBCAppCompat
	
	If the registry key does not exist or if the application name is not listed in
	the registry key, then the compatibility level for the application is set to SQL
	Server 7.0.
	
	The SQL Server ODBC driver compatibility level is not a global setting. If SQL
	Server 6.5 compatibility is desired or necessary it must be specifically set for
	the application that will be connecting to SQL Server 7.0.
	
	IMPORTANT: This article contains information about modifying the registry. Before
	you modify the registry, make sure to back it up and make sure that you
	understand how to restore the registry if a problem occurs. For information
	about how to back up, restore, and edit the registry, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The following steps may be used to programmatically set the compatibility level
	of the SQL Server ODBC driver for a specific application:
	
	1. Open the registry editor and navigate to the following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\MSSQLServer\Client\ODBCAppCompat
	
	2. Open the ODBC Administrator and create a data source name (DSN) that
	  references the PUBS database on SQL Server 7.0.
	
	3. Create a program file named Test.prg using the following code:
	
	  gnconnhandle=SQLCONNECT("MY_SERVER",'sa','')
	  MyVal=100
	  ? SQLEXEC(gnconnhandle,'pubs..byroyalty ?MyVal')
	  =SQLDISCONN(gnconnhandle)
	
	4. From the command line run Test.prg. Note that no recordset is returned and
	  value of -1 is printed to the screen.
	
	5. Create a program file named Odbccmpt.prg using the following code:
	
	     PARAMETER myapp_name
	     myapp_name=alltrim(myapp_name)
	     #DEFINE	DLL_ADVAPI             "ADVAPI32.DLL"
	     * Registry roots
	     #DEFINE HKEY_LOCAL_MACHINE     -2147483646  && BITSET(0,31)+2
	     * Registry Path
	  #DEFINE ODBC_DRVR_CMP "Software\Microsoft\MSSQLServer\Client\ODBCAppCompat"
	     * Error Codes
	     #DEFINE ERROR_SUCCESS           0        && OK
	     #DEFINE ERROR_EOF             259        && No more entries in key.
	     * Data types for keys
	     #DEFINE REG_SZ                  1        && Data string.
	     #DEFINE REG_EXPAND_SZ           2        && Unicode string.
	     #DEFINE REG_BINARY              3        && Binary data in any form.
	     #DEFINE REG_DWORD               4        && A 32-bit number.
	     * Data types labels
	     #DEFINE REG_BINARY_LOC  "*Binary*"       && Binary data in any form.
	     #DEFINE REG_DWORD_LOC   "*Dword*"        && A 32-bit number.
	     #DEFINE REG_UNKNOWN_LOC "*Unknown type*" && Unknown type.
	
	     * Declare API Functions
	     * Declare RegOpenKey to open registry key
	     DECLARE INTEGER RegOpenKey IN DLL_ADVAPI INTEGER hKey, ;
	        STRING lpSubKey, INTEGER @phkResult
	
	     * Declare RegCreateKey in case a new key is necessary
	     DECLARE INTEGER RegCreateKey IN DLL_ADVAPI ;
	        INTEGER nHKey, STRING @cSubKey, INTEGER @nResult
	
	     * Declare RegSetValueEx to allow setting a registry value
	     DECLARE INTEGER RegSetValueEx IN DLL_ADVAPI ;
	        INTEGER hKey, STRING lpszValueName, INTEGER dwReserved,;
	        INTEGER fdwType, STRING lpbData, INTEGER cbData
	
	     * Declare RegEnumValue to allow examination of registry values
	     DECLARE INTEGER RegEnumValue IN DLL_ADVAPI ;
	        INTEGER hKey, INTEGER iValue, STRING @lpszValue, ;
	        INTEGER @lpcchValue, INTEGER lpdwReserved, INTEGER @lpdwType, ;
	        STRING @lpbData, INTEGER @lpcbData
	
	     * Declare RegCloseKey to close the registry key when done
	     DECLARE INTEGER RegCloseKey IN dll_advapi INTEGER hKey
	
	     * End of API Declares
	     PUBLIC phkResult
	     phkResult=0
	     l_Key_Value_Exists=.F.
	     l_Key_Exists=.F.
	     l_Key_Exists=Check_For_Key(HKEY_LOCAL_MACHINE,ODBC_DRVR_CMP)
	     IF l_Key_Exists
	        l_Key_Value_Exists=Check_For_Value(myapp_name)
	        IF !l_Key_Value_Exists
	           nErrCode = RegSetValueEx(phkResult,myapp_name,0,;
	              REG_SZ,"6.50",3)
	        ENDIF
	     ENDIF
	     nErrCode = RegCloseKey(phkResult)
	     CLEAR DLLS
	     RETURN
	
	     PROCEDURE Check_For_Key
	        PARAMETER nClass_Root, cSubKey
	        nErrCode=RegOpenKey(HKEY_LOCAL_MACHINE,cSubKey,@phkResult)
	        IF phkResult!=0
	           RETURN .T.
	        ELSE
	           nErrCode=RegCreateKey(HKEY_LOCAL_MACHINE,@cSubKey,@phkResult)
	           RETURN .T.
	        ENDIF
	
	     PROCEDURE Check_For_Value
	        PARAMETER cProgName
	        nKeyEntry=0
	        DO WHILE .T.
	           STORE 0 TO lpdwReserved,lpdwType,nErrCode
	           STORE SPACE(256) TO lpbData, lpszValue
	           STORE LEN(lpbData) TO m.lpcchValue
	           STORE LEN(lpszValue) TO m.lpcbData
	           nErrCode=RegEnumValue(phkResult,nKeyEntry,@lpszValue,;
	              @lpcchValue,m.lpdwReserved,@lpdwType,@lpbData,@lpcbData)
	           DO CASE
	              CASE nErrCode = ERROR_EOF
	                 EXIT
	              CASE nErrCode # ERROR_SUCCESS
	                 EXIT
	           ENDCASE
	           nKeyEntry = nKeyEntry + 1
	           * Set array values
	           DIMENSION aKeyValues[m.nKeyEntry,2]
	           aKeyValues[m.nKeyEntry,1] = LEFT(m.lpszValue,m.lpcchValue)
	           aKeyValues[m.nKeyEntry,2] = LEFT(m.lpbData,m.lpcbData-1)
	        ENDDO
	        retval=.F.
	        IF nKeyEntry>0
	           FOR i=1 TO ALEN(aKeyValues,1)
	              IF UPPER(aKeyValues[i,1])=UPPER(cProgName)
	                 retval=.T.
	                 EXIT
	              ENDIF
	           NEXT
	        ENDIF
	        RETURN retval
	
	6. From the command line, type the following: " DO ODBCCMPT WITH 'VFP6' "
	  (without the quotation marks)
	
	7. Switch to the Registry Editor and click View.Refresh
	
	8. Note that the value 'vfp6' with a data value of "6.5" has been entered into
	  the registry
	
	9. From the command line run Test.prg. Note that a recordset is returned and
	  value of 1 is printed to the screen.
	
	REFERENCES
	==========
	
	SQL Server 7.0 Books Online; search on: "odbccmpt utility"
	
	Additional query words:
	
	======================================================================
	Keywords          : KbClientServer kbSQL kbvfp300b kbvfp500a kbvfp600 kbGrpDSFox kbMDAC250 kbSQLProg 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2.5,3.0,3.0b,5.0,5.0a,6.0,6.0 SP3
	Issue type        : kbhowto
	
	=============================================================================
	
