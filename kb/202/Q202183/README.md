---
layout: page
title: "Q202183: The OID for memPercentCommittedBytesInUse Always Returns Zero"
permalink: /kb/202/Q202183/
---

## Q202183: The OID for memPercentCommittedBytesInUse Always Returns Zero

{% raw %}

	Article: Q202183
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The object ID (OID) for the memPercentCommittedBytesInUse memory counter does
	not return the correct value when you issue a Simple Network Management Protocol
	(SNMP) GET or WALK command. This value is the ratio of the Committed Bytes to
	the Commit Limit values.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Windows NT Server
	4.0.
	
	MORE INFORMATION
	================
	
	You can create Performance Monitor objects using the Perfmib tools in the
	Microsoft Windows NT 4.0 Resource Kit. Use the following steps to create a
	Management Information Base (MIB), which exposes the Performance Monitor memory
	objects:
	
	1. At a command prompt, run the Perfmib.reg tool from the Windows NT 4.0
	  Resource Kit. This creates the appropriate registry entries for the
	  Perfmib.dll extension agent.
	
	2. Build a Perfmib.mib file and a Perfmib.ini file using the Per2mib.exe tool
	  from the Windows NT 4.0 Resource Kit. For example, at a command prompt, type
	  the following command:
	
	  "perf2mib perfmib.mib perfmib.ini memory 200 mem" (without the quotation
	  marks)
	
	  This creates a Perfmib.mib file and a Perfmib.ini file. These files are used
	  to expose the Performance Monitor memory object.
	
	3. At a command prompt, stop the SNMP service by typing "net stop snmp" (without
	  the quotation marks). (You can also stop the SNMP service using the Services
	  tool in Control Panel.)
	
	4. Find the Mib.bin file in the System32 folder and rename it to Mib.old.
	
	5. Use the following steps to compile a new Mib.bin file (that includes the
	  Perfmib.mib file created in step 2):
	
	  a. At a command prompt, set the default folder to the Windows NT 4.0 Resource
	     Kit folder (for example, type "cd <ntreskit>" (without the quotation
	     marks), where <ntreskit> is the Windows NT 4.0 Resource Kit folder).
	
	  b. Type the following command: "mibcc -n o<ntreskit>\mib.bin -t -w2
	     smi.mib lmmib2.mib mib_ii.mib perfmib.mib" (without the quotation marks)
	
	6. Copy the following files from the Windows NT 4.0 Resource Kit folder
	  (<ntreskit>) to the System32 folder (%SystemRoot%\System32):
	
	   - Mib.bin
	
	   - Perfmib.bin
	
	   - Perfmib.ini
	
	   - Perfmib.dll
	
	7. At a command prompt, start the SNMP service by typing "net start snmp"
	  (without the quotation marks). (You can also start the SNMP service using the
	  Services tool in Control Panel.)
	
	8. After you create the new MIB that contains the Performance Monitor memory
	  objects, you can test it using the Snmputil.exe tool found in the Windows NT
	  4.0 Resource Kit. To test the MIB:
	
	  a. At a command prompt, type "cd <ntreskit>" (without the quotation
	     marks). This changes the default folder to the resource kit folder.
	
	  b. Use the Snmputil tool to walk the process OID tree. Type the following
	     command:
	
	  "snmputil walk localhost public .1.3.6.1.4.1.311.1.1.3.1.1.200.27.0" (without
	  the quotation marks)
	
	     Using this command always returns a value of 0 for the
	     memPercentCommitBytesInUse memory counter, regardless of the values for
	     Committed Bytes and Commit Limit. It should return the ratio of the
	     Committed Bytes to the Commit Limit values.
	
	REFERENCES
	==========
	
	For additional information, please read the following article in the Microsoft
	Knowledge Base: Q139488 - How to Setup Windows NT SNMP Performance Counter Agent
	Extension.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
