---
layout: page
title: "Q244584: HOWTO: Enumerate Cluster Resources by Resource Type in Visual C+"
permalink: /kb/244/Q244584/
---

## Q244584: HOWTO: Enumerate Cluster Resources by Resource Type in Visual C+

	Article: Q244584
	Product(s): Microsoft Windows NT
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbClustServSearch kbClustServ100 kbClustServ110 kbGrpDSPlatform kbDSupport
	Last Modified: 02-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There is no direct way to enumerate all of the resources of a specific resource
	type in Microsoft Cluster Server versions 1.0 and 1.1 through the cluster APIs.
	Instead, you need to enumerate through all of the resources and determine on an
	individual basis whether or not the resource is of the desired resource type.
	Later in this article there is a sample that demonstrates how to do this.
	
	MORE INFORMATION
	================
	
	To compile this project:
	
	1. Create a new Win32 console application in Microsoft Visual C++ 5.0 or 6.0.
	
	2. Add Clusapi.lib to the project. From the Project menu, select Settings, and
	  then select the Link tab and add Clusapi.lib to the end of the
	  "Object/library modules" list. Click OK.
	
	3. Replace the code in the main CPP file with the following code.
	
	4. Click F7 to compile.
	
	  #include "stdafx.h"
	  #include <stdio.h>
	  #include <windows.h>
	  #include <clusapi.h>
	
	  #define BUFFER_LEN 1024
	  #define TYPE_BUFFER_LEN 1024
	
	  int wmain(int argc, WCHAR* argv[])
	  {
	  	HCLUSTER hCluster = NULL;
	  	HCLUSENUM hClusEnum = NULL;
	  	HRESOURCE hResource = NULL;
	
	  	DWORD dwIndex = 0;
	  	DWORD dwType;
	
	  	DWORD dwRetVal = ERROR_SUCCESS;
	
	  	DWORD dwcbBuffer = BUFFER_LEN;
	  	WCHAR lpwBuffer[BUFFER_LEN];
	
	  	DWORD dwcbTypeBuffer = TYPE_BUFFER_LEN;
	  	WCHAR lpwTypeBuffer[TYPE_BUFFER_LEN];
	
	  	WCHAR* lpwClusterName = NULL;
	  	WCHAR* lpwResTypeName = NULL;
	
	  	if( argc < 2 )
	  	{
	  		wprintf( L"Usage: enumres [Cluster Name] resource_type_name" );
	  		return -1;
	  	}	
	  	else if( argc > 2 )
	  	{
	  		lpwClusterName = argv[1];
	  		lpwResTypeName = argv[2];
	  	}
	  	else // argc == 2, Cluster Name not specified
	  	{
	  		lpwClusterName = NULL;
	  		lpwResTypeName = argv[1];
	  	}
	
	  	hCluster = OpenCluster( lpwClusterName );
	
	  	if( NULL != hCluster )
	  	{
	  		hClusEnum = ClusterOpenEnum( hCluster, CLUSTER_ENUM_RESOURCE );
	
	  		if( NULL != hClusEnum )
	  		{
	  			wprintf( L"Resources of type %s:\n", lpwResTypeName );
	
	  			dwIndex = 0;
	  			
	  			dwcbBuffer = BUFFER_LEN;
	  			dwRetVal = ClusterEnum( hClusEnum, dwIndex, &dwType, lpwBuffer, &dwcbBuffer );
	
	  			while( ERROR_SUCCESS == dwRetVal )
	  			{
	  				hResource = OpenClusterResource( hCluster, lpwBuffer );
	
	  				if( NULL != hResource )
	  				{
	  					dwcbTypeBuffer = TYPE_BUFFER_LEN;
	  					dwRetVal = ClusterResourceControl( 
	  							hResource, 
	  							NULL, 
	  							CLUSCTL_RESOURCE_GET_RESOURCE_TYPE,
	  							NULL,
	  							NULL,
	  							lpwTypeBuffer,
	  							dwcbTypeBuffer,
	  							NULL
	  						);
	
	  					if( ERROR_SUCCESS == dwRetVal && !wcscmp( lpwResTypeName, lpwTypeBuffer ) )
	  					{
	  						wprintf( L"%s\n", lpwBuffer );
	  					}
	
	  					CloseClusterResource( hResource );
	  				}
	  			
	  				dwIndex++;
	  				dwcbBuffer = BUFFER_LEN;
	  				dwRetVal = ClusterEnum( hClusEnum, dwIndex, &dwType, lpwBuffer, &dwcbBuffer );
	
	  			}// while
	  			
	  			ClusterCloseEnum( hClusEnum );
	
	  		}// NULL != hClusEnum
	  		else
	  		{
	  			wprintf( L"ClusterOpenEnum failed.\n" );
	  		}
	
	  		CloseCluster( hCluster );
	
	  	}// NULL != hCluster
	  	else 
	  	{
	  		wprintf( L"Could not open cluster %s.\n", lpwClusterName );
	  	}
	
	  	return 0;
	  }
	
	You can also get the same list of resources from the command line by typing the
	following on a Windows NT 4.0 or a Windows 2000 computer with Microsoft Cluster
	Server installed. Note that there are two blank spaces at the beginning of " IP
	Address".
	
	  cluster res /prop:name | find /I "  IP Address"
	
	
	REFERENCES
	==========
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q244597 HOWTO: Enumerate Cluster Resources by Resource Type in VB
	
	Additional query words:
	
	======================================================================
	Keywords          : kbClustServSearch kbClustServ100 kbClustServ110 kbGrpDSPlatform kbDSupport 
	Technology        : kbAudDeveloper kbClustServSearch
	Version           : winnt:
	Issue type        : kbhowto
	
	=============================================================================
	
