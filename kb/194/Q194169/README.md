---
layout: page
title: "Q194169: SNMP Process Object Returns the Incorrect Value"
permalink: /kb/194/Q194169/
---

## Q194169: SNMP Process Object Returns the Incorrect Value

{% raw %}

	Article: Q194169
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Object Identifier (OID) for the Process Instance Name counter does not
	return the correct value when sending an SNMP Get or Walk. Also, when walking
	the process OID tree when there are multiple processes with the same name, the
	SNMP walk will go into an endless loop.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server version 4.0.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Performance Monitor objects can be created by using the Perfmib utilities from
	the Windows NT 4.0 Resource Kit. The following steps can be used to create a
	Management Information Base (MIB), which exposes the Performance Monitor process
	objects:
	
	1. From an MS-DOS prompt, run the Perfmib.reg utility from the Windows NT 4.0
	  Resource Kit. This will create the appropriate registry entries for the
	  Perfmib.dll extension agent.
	
	2. Build a Perfmib.mib and a Perfmib.ini file using the Per2mib.exe utility from
	  the Windows NT 4.0 Resource Kit. For example, from an MS-DOS prompt, run the
	  following command:
	
	  perf2mib perfmib.mib perfmib.ini process 300 proc
	
	  This creates a Perfmib.mib file and a Perfmib.ini file. These files are used
	  to expose the performance monitor process instance object.
	
	3. Stop the SNMP service by doing either of the following:
	
	   - From an MS-DOS prompt, run the following command:
	
	     net stop SNMP
	
	     -or-
	
	   - Stop SNMP by using the Services utility in Control Panel.
	
	4. Rename the mib.bin file, found in the System32 folder, to mib.old.
	
	5. Compile a new mib.bin file, which will include the perfmib.mib file created
	  earlier in step 2, by performing the following steps:
	
	  a. From an MS-DOS prompt, set the default folder to the Windows NT 4.0
	     Resource Kit folder (for example, type: CD %ntreskit%).
	
	  b. Run the following command:
	
	     mibcc -n o%ntreskit%\mib.bin -t -w2 smi.mib lmmib2.mib mib_ii.mib
	     perfmib.mib
	
	6. Copy the following files from the Windows NT 4.0 Resource Kit folder
	  (%ntreskit%) to the System32 folder (%SystemRoot%\System32 folder):
	
	  Mib.bin
	  Perfmib.bin
	  Perfmib.ini
	  Perfmib.dll
	
	7. Start the SNMP service by doing either of the following:
	
	   - From an MS-DOS prompt, run the following command:
	
	     net start SNMP
	
	     -or-
	
	   - Start SNMP by using the Services utility in Control Panel.
	
	After the new MIB that contains the performance monitor process instant objects
	is created, it can be tested by using the Snmputil.exe utility found in the
	Microsoft Windows NT 4.0 Resource Kit. To test the MIB do the following:
	
	1. From an MS-DOS prompt, run the following command to change your default to
	  the resource kit directory:
	
	  CD %ntreskit%
	
	2. Use the Snmputil utility to walk the process OID tree:
	
	  Run the following command:
	
	  snmputil walk localhost public .1.3.6.1.4.1.311.1.1.3.1.1.300.1.1
	
	Results: If there are two processes with the same name, the utility will loop
	indefinitely. As long as there are not two processes with the same name, the
	utility will successfully walk the tree but it will not display the process
	instance name (.1.3.6.1.4.1.311.1.1.3.1.1.300.1.2); this value will be skipped.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
