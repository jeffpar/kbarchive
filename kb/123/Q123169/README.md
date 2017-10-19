---
layout: page
title: "Q123169: WINS Event Log IDs 4096 - 4134 (Informational Messages)"
permalink: /kb/123/Q123169/
---

## Q123169: WINS Event Log IDs 4096 - 4134 (Informational Messages)

	Article: Q123169
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	This article describes Windows Internet Name Service (WINS) event log IDs
	4096 through 4134. These events represent informational messages.
	
	Event Log IDs 4096 - 4134
	-------------------------
	
	Event   Description
	-----   -----------
	
	4096    WINS has initialized its log for this invocation.
	
	4097    WINS has initialized properly and is ready.
	
	4098    WINS was terminated by the service controller. WINS will
	       gracefully terminate.
	
	4099    WINS is being gracefully terminated by the administrator. The
	       address of the administrator is %1.
	
	4100    WINS is being abruptly terminated by the administrator. The
	       address of the administrator is %1.
	
	4101    WINS got a Name Request with an invalid opcode. The request is
	       being thrown away.
	
	4102    Connection was aborted by the remote client.
	
	4103    There are no records in the Registry for the key.
	
	4104    There are no PULL records.
	
	4105    There are no PUSH records.
	
	4106    The Database of Name to Address Mappings is empty. It could mean
	       that a previous invocation of WINS created the database and then
	       went down before any registration could be done.
	
	4107    The Database of Owner to Address Mappings is empty. It could
	       mean that a previous invocation of WINS created the table and
	       then went down before it could add its own entry to it. The WINS
	       server went down real fast (i.e. even before all its threads
	       could become fully operational.
	
	4108    WINS could not read the InitTimeReplication field of the
	       PULL/PUSH key.
	
	4109    WINS could not read the Refresh Interval from the Registry.
	
	4110    WINS could not read the Tombstone Interval from the Registry.
	
	4111    WINS could not read the Verify Interval from the Registry.
	
	4112    WINS could not read the retry count for retrying communication
	       with a remote WINS.
	
	4113    WINS could not read the Tombstone Timeout from the Registry
	
	4114    WINS got a packet that has the wrong format (for example, a label
	       may be more than 63 octets).
	
	4115    No records meeting the %1 criteria were found in the database.
	
	4116    WINS's Replicator could not find any records in the database. It
	       means that there are no active or tombstone records in the
	       database. It could be that the records being requested by a
	       remote WINS server are either released or non-existent.
	
	4117    The special group has reached its limit. WINS cannot add any
	       more members.
	
	4118    The address database already has 25 ACTIVE address owners which
	       is the maximum. This error was noticed while attempting to add
	       the address given below.
	
	4119    The WINS server got an update notification from the WINS server
	       with address (%1). The WINS server rejected it. This means that
	       the remote WINS server is not in the list of Push partners (WINS
	       servers under the PULL key) and the administrator has prohibited
	       (via the Registry) replication with non-configured WINS servers.
	       If you wish this WINS server to accept update notifications from
	       non-configured WINS servers then set "RplOnlyWCnfPnrs" (without
	       quotes) value in the Registry to 0. The Registry location is as
	       follows:
	
	          HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	          \Wins\Parameters
	
	       NOTE: The above registry key is one path; it has been wrapped for readability.
	
	4120    The WINS got an update notification from WINS with address (%1).
	       The WINS accepted it.
	
	4121    The WINS server got a pull request from the WINS  server with
	       address (%1). The WINS server rejected it since the remote WINS
	       server is not in the list of PULL partners (WINS servers under
	       the PUSH key) and the administrator has specified (via the
	       Registry) that replication with remote WINS server not in the list
	       be not done. If you wish this WINS server to accept update
	       notifications from WINS servers not in the "pull partner" list,
	       then set the "replication only with configured partners" value
	       in the Registry to 0. The Registry location is as follows:
	
	          HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	          \Wins\Parameters
	
	       NOTE: The above registry key is one path; it has been wrapped for
	       readability.
	
	4122    The datafiles key could not be opened.
	
	4123    The NETBT key could not be opened.
	
	4124    The NETBT key could not be queried.
	
	4125    A worker thread was created by the administrator.
	
	4126    A worker thread was terminated by the administrator.
	
	4127    The owner-address mapping table had an entry with owner ID
	       non-zero and address the same as the local WINS address. The
	       entry has been marked as deleted in the in-memory table.
	
	4128    An exception was encountered while trying to inform a remote WINS
	       to update the version number.
	
	4129    The local WINS is going to inform a remote WINS to update the
	       version number of a record. This is because the local WINS got a
	       clash between an active owned name and an active replica that it
	       pulled from a replication partner.
	
	4130    The local WINS has been informed by a remote WINS with address %1
	       to update the version number  of a record. This is because the
	       remote WINS got a clash between an active owned name and an active
	       replica that it pulled from a replication partner.
	
	4131    WINS could not find the record it was asked to update the version
	       stamp of (by a remote WINS). Check if the record got deleted or
	       updated.
	
	4132    While verifying the validity of old replicas, a name mismatch was
	       noticed. The local record has the name %1 while the replica pulled
	       in from the WINS that owns this record has the name %2. This could
	       mean that the remote WINS was brought down and then up again but
	       its version counter value was not set to its previous value before
	       termination.
	
	4133    The value of the version counter was changed. The new value (Low
	       32 bits) can be viewed under Data in the Event Details dialog box
	       in Event Viewer.
	
	4134    WINS replication request is being ignored since WINS suspects that
	       the Wins\Partners key information has changed (because it got a
	       notification from the Registry) which makes the current request
	       pertaining to partner old.
	
	Additional query words: NBT NETBT
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	Issue type        : kbinfo
	
	=============================================================================
	
